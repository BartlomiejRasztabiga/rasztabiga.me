import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container max-w-3xl">
      <div className="flex gap-4 my-6">
        <Link
          href="/"
          className="text-sm font-medium hover:text-primary transition-colors text-muted-foreground"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium hover:text-primary transition-colors text-primary"
        >
          Blog
        </Link>
      </div>
      {children}
    </div>
  );
}
