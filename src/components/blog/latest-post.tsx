import { getAllPosts } from '@/lib/mdx';
import PostPreview from '@/components/blog/post-preview';
import Link from 'next/link';

export default async function LatestPost() {
  const posts = await getAllPosts();
  const latestPost = posts[0];

  if (!latestPost) {
    return null;
  }

  return (
    <section className="mb-16 pt-8 border-t border-muted">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog</h2>
        <Link 
          href="/blog" 
          className="text-sm font-medium text-primary hover:underline flex items-center"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
      <PostPreview
        slug={latestPost.slug}
        title={latestPost.title}
        description={latestPost.description}
        publishedAt={latestPost.publishedAt}
      />
    </section>
  );
}
