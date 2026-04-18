# SEO Improvements — Design Spec

**Date:** 2026-04-18  
**Author:** Bartłomiej Rasztabiga  
**Goal:** Improve organic search ranking and social media link previews for rasztabiga.me and its blog posts.

---

## Overview

Full SEO overhaul in a single PR. The site is a Next.js static export (`output: 'export'`) hosted on Cloudflare Pages. Changes are scoped to four areas: technical SEO foundation, social sharing meta tags + dynamic OG images, structured data (JSON-LD), and a tags/categories system.

---

## Section 1: Technical SEO Foundation

### `sitemap.xml`
- New file: `src/app/sitemap.ts`
- Next.js exports it as `/sitemap.xml` at build time
- Includes: home page (`/`), blog index (`/blog`), each post with `lastModified` set to `publishedAt`

### `robots.txt`
- New file: `src/app/robots.ts`
- Allows all crawlers, points to `/sitemap.xml`

### Root layout `metadataBase`
- `src/app/layout.tsx` gets an exported `metadata` object with:
  - `metadataBase: new URL('https://rasztabiga.me')`
- Required for Next.js to resolve relative OG image URLs correctly in static export

### Fix OG image on home page
- `src/app/page.tsx`: replace hardcoded `cv.jarocki.me/opengraph-image` URLs with the site's own `opengraph-image` (already defined in `src/app/opengraph-image.tsx`)

---

## Section 2: Social Sharing (OG + Twitter Card + Dynamic OG Images)

### Blog post metadata
`generateMetadata` in `src/app/blog/[slug]/page.tsx` extended with:
- `openGraph`: `type: 'article'`, `publishedTime`, `authors: ['Bartłomiej Rasztabiga']`, `tags`, `images` pointing to the per-post OG image
- `twitter`: `card: 'summary_large_image'`
- `alternates.canonical`: absolute URL of the post (`https://rasztabiga.me/blog/{slug}`)

### Blog index metadata
`src/app/blog/page.tsx` — add `openGraph` to existing `metadata` export.

### Dynamic OG image per post
- New file: `src/app/blog/[slug]/opengraph-image.tsx`
- Uses Next.js `ImageResponse` (1200×630px), pre-rendered at build time for each static slug
- Design: dark gradient background, post title in large font, publication date and `rasztabiga.me` branding

---

## Section 3: Structured Data (JSON-LD)

### BlogPosting schema
- Added inline in `src/app/blog/[slug]/page.tsx` as `<script type="application/ld+json">`
- Schema fields:
  - `@type: "BlogPosting"`
  - `headline`, `description`, `datePublished`
  - `author`: `{ @type: "Person", name: "Bartłomiej Rasztabiga", url: "https://rasztabiga.me" }`
  - `keywords`: from post `tags`
  - `url`: canonical URL of the post
- Enables Google rich results and improved content understanding

---

## Section 4: Tags / Categories

### MDX frontmatter
- Add `tags: string[]` field to all existing posts
- Example tags:
  - `jvm-in-kubernetes.mdx`: `["JVM", "Kubernetes", "Java", "Spring Boot"]`
  - `kafka-vs-rabbitmq.mdx`: `["Kafka", "RabbitMQ", "Messaging", "Architecture"]`
  - `integration-testing-in-micronaut.mdx`: `["Micronaut", "Testing", "Java"]`

### `BlogPost` type and parsing
- `src/lib/mdx.ts`: add `tags?: string[]` to `BlogPost` type, read from frontmatter in both `getPostBySlug` and `getAllPosts`

### UI — post page
- `src/app/blog/[slug]/page.tsx`: display tags as small badges below the title and date
- Style: `bg-muted rounded-full px-2 py-0.5 text-xs font-medium`
- Non-clickable in initial implementation (no tag filtering page — YAGNI)

### UI — post preview (blog index)
- `src/components/blog/post-preview.tsx`: display tags below the post description

### Meta keywords
- Tags passed as `keywords` in `generateMetadata` on the post page
- Note: Google ignores meta keywords, but Bing and other engines use them

---

## Files Changed

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Add `metadata` export with `metadataBase` |
| `src/app/page.tsx` | Fix OG image URLs |
| `src/app/sitemap.ts` | New — sitemap generator |
| `src/app/robots.ts` | New — robots.txt |
| `src/app/blog/page.tsx` | Add `openGraph` to metadata |
| `src/app/blog/[slug]/page.tsx` | Extend `generateMetadata`, add JSON-LD, add tags UI |
| `src/app/blog/[slug]/opengraph-image.tsx` | New — dynamic OG image |
| `src/lib/mdx.ts` | Add `tags` field to `BlogPost` type and parsing |
| `src/components/blog/post-preview.tsx` | Display tags |
| `content/blog/*.mdx` | Add `tags` to frontmatter of all posts |

---

## Out of Scope

- Tag filtering / tag index pages
- Reading time estimate
- Comment system
- Analytics integration beyond existing Vercel Analytics
