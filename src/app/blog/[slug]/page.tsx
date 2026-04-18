import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { getMDXComponent } from 'mdx-bundler/client';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RabbitMQDiagram } from '@/components/blog/diagrams/RabbitMQDiagram';
import { KafkaDiagram } from '@/components/blog/diagrams/KafkaDiagram';
import { WorkerQueueDiagram } from '@/components/blog/diagrams/WorkerQueueDiagram';
import { KafkaFanoutDiagram } from '@/components/blog/diagrams/KafkaFanoutDiagram';
import { RabbitMQScalingDiagram } from '@/components/blog/diagrams/RabbitMQScalingDiagram';
import { KafkaScalingDiagram } from '@/components/blog/diagrams/KafkaScalingDiagram';
import { DecisionFlowchart } from '@/components/blog/diagrams/DecisionFlowchart';

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.content as string);

  return (
    <>
      <TableOfContents headings={post.headings ?? []} />
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none mb-10">
        <Content components={{ RabbitMQDiagram, KafkaDiagram, WorkerQueueDiagram, KafkaFanoutDiagram, RabbitMQScalingDiagram, KafkaScalingDiagram, DecisionFlowchart }} />
      </article>
    </>
  );
}
