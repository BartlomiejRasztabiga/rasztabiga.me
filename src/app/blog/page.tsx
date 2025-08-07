import { getAllPosts } from '@/lib/mdx';
import PostPreview from '@/components/blog/post-preview';

export const metadata = {
  title: 'Blog | Bartłomiej Rasztabiga',
  description: 'Articles about programming and technology',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <PostPreview 
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      )}
    </>
  );
}
