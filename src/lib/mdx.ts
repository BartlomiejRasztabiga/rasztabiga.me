import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

export type TocHeading = {
  id: string;
  text: string;
  level: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  tags?: string[];
  content?: string;
  headings?: TocHeading[];
};

// Matches github-slugger used by rehype-slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function extractHeadings(source: string): TocHeading[] {
  const seen: Record<string, number> = {};
  const headings: TocHeading[] = [];

  for (const line of source.split('\n')) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;

    const level = match[1].length;
    const text = match[2].replace(/\*\*/g, '').replace(/`([^`]+)`/g, '$1').trim();
    let id = slugify(text);

    if (seen[id] !== undefined) {
      seen[id]++;
      id = `${id}-${seen[id]}`;
    } else {
      seen[id] = 0;
    }

    headings.push({ id, text, level });
  }

  return headings;
}

const root = process.cwd();
const POSTS_PATH = path.join(root, 'content', 'blog');

export const getFiles = () => {
  // Get all MDX files from the posts directory
  const files = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
  
  // Filter out files that start with _ (drafts) or have .draft.mdx extension
  return files.filter(file => {
    const filename = path.basename(file);
    return !filename.startsWith('_');
  });
};

export const getPostBySlug = async (slug: string): Promise<BlogPost> => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf8');
  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, rehypeHighlight];
      return options;
    },
  });

  return {
    slug,
    content: code,
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    description: frontmatter.description,
    tags: frontmatter.tags ?? [],
    headings: extractHeadings(source),
  };
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const files = getFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const source = fs.readFileSync(path.join(POSTS_PATH, file), 'utf8');
      const { data } = matter(source);
      
      return {
        slug,
        title: data.title,
        publishedAt: data.publishedAt,
        description: data.description,
        tags: data.tags ?? [],
      };
    })
  );

  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};
