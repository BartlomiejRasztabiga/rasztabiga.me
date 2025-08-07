import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/mdx';

export default function PostPreview({ slug, title, description, publishedAt }: BlogPost) {
  return (
    <article className="group">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">
          <Link href={`/blog/${slug}`} className="group-hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">
          {format(new Date(publishedAt), 'MMMM d, yyyy')}
        </p>
      </div>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <Link 
        href={`/blog/${slug}`}
        className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        Read more
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </article>
  );
}
