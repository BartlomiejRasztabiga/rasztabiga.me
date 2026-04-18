# SEO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add sitemap, robots.txt, OG/Twitter meta tags, dynamic per-post OG images, JSON-LD structured data, and a tags system to rasztabiga.me.

**Architecture:** All changes are purely additive Next.js metadata APIs + new files. The site uses `output: 'export'` (static export) — sitemap, robots, and OG images all pre-render at build time. No runtime server needed.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, mdx-bundler, gray-matter, next/og (ImageResponse)

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/app/layout.tsx` | Modify | Add `metadataBase` so Next.js resolves relative OG URLs correctly |
| `src/app/page.tsx` | Modify | Fix hardcoded `cv.jarocki.me` OG image URL |
| `src/app/sitemap.ts` | Create | Static sitemap generator |
| `src/app/robots.ts` | Create | robots.txt generator |
| `src/lib/mdx.ts` | Modify | Add `tags?: string[]` to `BlogPost` type and parsing |
| `content/blog/jvm-in-kubernetes.mdx` | Modify | Add `tags` frontmatter |
| `content/blog/kafka-vs-rabbitmq.mdx` | Modify | Add `tags` frontmatter |
| `content/blog/integration-testing-in-micronaut.mdx` | Modify | Add `tags` frontmatter |
| `src/app/blog/page.tsx` | Modify | Add `openGraph` to metadata |
| `src/app/blog/[slug]/page.tsx` | Modify | Extend `generateMetadata` with OG/Twitter/canonical/keywords, add JSON-LD script, display tags UI |
| `src/app/blog/[slug]/opengraph-image.tsx` | Create | Dynamic OG image (1200×630) pre-rendered per post at build time |
| `src/components/blog/post-preview.tsx` | Modify | Display tags badges |

---

## Task 1: Add `tags` to `BlogPost` type and MDX parsing

**Files:**
- Modify: `src/lib/mdx.ts`

- [ ] **Step 1: Update `BlogPost` type and both parsers**

Replace the `BlogPost` type and update `getPostBySlug` and `getAllPosts` in `src/lib/mdx.ts`:

```typescript
export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  tags?: string[];
  content?: string;
  headings?: TocHeading[];
};
```

In `getPostBySlug`, add `tags` to the return object:
```typescript
return {
  slug,
  content: code,
  title: frontmatter.title,
  publishedAt: frontmatter.publishedAt,
  description: frontmatter.description,
  tags: frontmatter.tags ?? [],
  headings: extractHeadings(source),
};
```

In `getAllPosts`, add `tags` to the mapped return:
```typescript
return {
  slug,
  title: data.title,
  publishedAt: data.publishedAt,
  description: data.description,
  tags: data.tags ?? [],
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/mdx.ts
git commit -m "feat: add tags field to BlogPost type and MDX parsing"
```

---

## Task 2: Add `tags` frontmatter to all blog posts

**Files:**
- Modify: `content/blog/jvm-in-kubernetes.mdx`
- Modify: `content/blog/kafka-vs-rabbitmq.mdx`
- Modify: `content/blog/integration-testing-in-micronaut.mdx`

- [ ] **Step 1: Update `jvm-in-kubernetes.mdx` frontmatter**

Change the frontmatter block at the top of `content/blog/jvm-in-kubernetes.mdx`:
```yaml
---
title: "JVM in Kubernetes: Why Your App Keeps Getting OOMKilled"
publishedAt: "2026-04-18"
description: "The JVM was built before containers existed. Here's what that means in practice, why -Xmx is usually the wrong answer, and how to actually configure memory in Kubernetes."
tags: ["JVM", "Kubernetes", "Java", "Spring Boot", "DevOps"]
---
```

- [ ] **Step 2: Update `kafka-vs-rabbitmq.mdx` frontmatter**

Read the current frontmatter of `content/blog/kafka-vs-rabbitmq.mdx` and add:
```yaml
tags: ["Kafka", "RabbitMQ", "Messaging", "Architecture", "Distributed Systems"]
```

- [ ] **Step 3: Update `integration-testing-in-micronaut.mdx` frontmatter**

Read the current frontmatter of `content/blog/integration-testing-in-micronaut.mdx` and add:
```yaml
tags: ["Micronaut", "Integration Testing", "Java", "Testing"]
```

- [ ] **Step 4: Verify build succeeds**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn build
```
Expected: Build completes without errors

- [ ] **Step 5: Commit**

```bash
git add content/blog/
git commit -m "feat: add tags to all blog post frontmatter"
```

---

## Task 3: Add `metadataBase` to root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add metadata export**

Add `Metadata` import and `metadata` export to `src/app/layout.tsx`. The full file becomes:

```typescript
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rasztabiga.me"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add metadataBase to root layout"
```

---

## Task 4: Fix home page OG image URL

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace hardcoded `cv.jarocki.me` OG image URL**

In `src/app/page.tsx`, update the `metadata` export. The `openGraph.images` and `twitter.images` arrays currently point to `https://cv.jarocki.me/opengraph-image`. Replace the entire `metadata` export with:

```typescript
export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["/opengraph-image"],
  },
};
```

(`metadataBase` in `layout.tsx` resolves `/opengraph-image` to `https://rasztabiga.me/opengraph-image`)

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: use own domain for OG image on home page"
```

---

## Task 5: Add `sitemap.ts` and `robots.ts`

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create `src/app/sitemap.ts`**

```typescript
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://rasztabiga.me/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://rasztabiga.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://rasztabiga.me/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
```

- [ ] **Step 2: Create `src/app/robots.ts`**

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://rasztabiga.me/sitemap.xml",
  };
}
```

- [ ] **Step 3: Verify build produces sitemap and robots**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn build && ls out/sitemap.xml out/robots.txt
```
Expected: Both files exist. Check `out/sitemap.xml` contains the blog post URLs.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt"
```

---

## Task 6: Add `openGraph` to blog index metadata

**Files:**
- Modify: `src/app/blog/page.tsx`

- [ ] **Step 1: Extend metadata with openGraph**

Replace the `metadata` export in `src/app/blog/page.tsx`:

```typescript
export const metadata = {
  title: "Blog | Bartłomiej Rasztabiga",
  description: "Articles about programming and technology",
  openGraph: {
    title: "Blog | Bartłomiej Rasztabiga",
    description: "Articles about programming and technology",
    type: "website",
    url: "https://rasztabiga.me/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Bartłomiej Rasztabiga",
    description: "Articles about programming and technology",
  },
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat: add openGraph and twitter metadata to blog index"
```

---

## Task 7: Extend blog post `generateMetadata` with OG, Twitter, canonical, keywords

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Replace `generateMetadata` with extended version**

In `src/app/blog/[slug]/page.tsx`, replace the existing `generateMetadata` function:

```typescript
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | Bartłomiej Rasztabiga`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `https://rasztabiga.me/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Bartłomiej Rasztabiga"],
      tags: post.tags,
      url: `https://rasztabiga.me/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add OG, Twitter, canonical and keywords to blog post metadata"
```

---

## Task 8: Add JSON-LD structured data to blog post page

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Add JSON-LD `<script>` to the blog post JSX**

In `src/app/blog/[slug]/page.tsx`, update the `BlogPost` default export function. Add the JSON-LD script above the `<TableOfContents>` component:

```typescript
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.content as string);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Bartłomiej Rasztabiga",
      url: "https://rasztabiga.me",
    },
    keywords: post.tags?.join(", "),
    url: `https://rasztabiga.me/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TableOfContents headings={post.headings ?? []} />
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {format(new Date(post.publishedAt), "MMMM d, yyyy")}
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none mb-10">
        <Content components={{ RabbitMQDiagram, KafkaDiagram, WorkerQueueDiagram, KafkaFanoutDiagram, RabbitMQScalingDiagram, KafkaScalingDiagram, DecisionFlowchart }} />
      </article>
    </>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Verify JSON-LD appears in built HTML**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn build && grep -l "application/ld+json" out/blog/*/index.html
```
Expected: Lists all blog post HTML files

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add JSON-LD BlogPosting structured data to blog posts"
```

---

## Task 9: Add dynamic OG image per blog post

**Files:**
- Create: `src/app/blog/[slug]/opengraph-image.tsx`

- [ ] **Step 1: Create `src/app/blog/[slug]/opengraph-image.tsx`**

```typescript
import { ImageResponse } from "next/og";
import { getAllPosts } from "@/lib/mdx";
import { format } from "date-fns";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
        }}
      >
        <div style={{ color: "#94a3b8", fontSize: 24, fontFamily: "sans-serif" }}>
          rasztabiga.me
        </div>
        <div
          style={{
            color: "#f1f5f9",
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 1000,
            fontFamily: "sans-serif",
          }}
        >
          {post?.title ?? "Blog"}
        </div>
        <div style={{ color: "#94a3b8", fontSize: 24, fontFamily: "sans-serif" }}>
          {post
            ? format(new Date(post.publishedAt), "MMMM d, yyyy")
            : ""}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
```

- [ ] **Step 2: Verify build generates OG images**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn build && ls out/blog/*/opengraph-image.png
```
Expected: One `.png` file per blog post slug

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/[slug]/opengraph-image.tsx
git commit -m "feat: add dynamic per-post OG image"
```

---

## Task 10: Display tags UI on blog post page and post preview

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`
- Modify: `src/components/blog/post-preview.tsx`

- [ ] **Step 1: Add tags badges to blog post page**

In `src/app/blog/[slug]/page.tsx`, update the header section inside the return to display tags below the date:

```tsx
<div className="mb-8">
  <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
  <p className="text-sm text-muted-foreground">
    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
  </p>
  {post.tags && post.tags.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-3">
      {post.tags.map((tag) => (
        <span
          key={tag}
          className="bg-muted rounded-full px-2 py-0.5 text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  )}
</div>
```

- [ ] **Step 2: Add tags to `PostPreview` component**

Replace the entire `src/components/blog/post-preview.tsx`:

```typescript
import Link from "next/link";
import { format } from "date-fns";
import { BlogPost } from "@/lib/mdx";

export default function PostPreview({
  slug,
  title,
  description,
  publishedAt,
  tags,
}: BlogPost) {
  return (
    <article className="group">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">
          <Link href={`/blog/${slug}`} className="group-hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">
          {format(new Date(publishedAt), "MMMM d, yyyy")}
        </p>
      </div>
      <p className="mt-2 text-muted-foreground">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted rounded-full px-2 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <Link
        href={`/blog/${slug}`}
        className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </article>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn tsc --noEmit
```
Expected: no errors

- [ ] **Step 4: Full build verification**

```bash
cd /Users/rasztabigab/Projects/rasztabiga.me && yarn build
```
Expected: Build completes without errors or warnings about missing types

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/[slug]/page.tsx src/components/blog/post-preview.tsx
git commit -m "feat: display tags badges on blog post page and post preview"
```
