import Link from 'next/link';

export default function BlogNavItem() {
  return (
    <div className="flex justify-end mb-4">
      <Link
        href="/blog"
        className="text-sm font-medium hover:text-primary transition-colors text-muted-foreground"
      >
        Blog
      </Link>
    </div>
  );
}
