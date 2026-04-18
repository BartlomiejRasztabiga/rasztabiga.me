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
