import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  content?: string;
};

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
      };
    })
  );

  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};
