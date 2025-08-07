import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { getMDXComponent } from 'mdx-bundler/client';

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug).catch(() => null);
  
  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Bartłomiej Rasztabiga`,
    description: post.description,
  };
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.content as string);

  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none mb-10">
        <Content />
      </article>
    </>
  );
}
