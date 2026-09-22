import { notFound } from "next/navigation";
import ArticleLayout from "@/components/sections/ArticleLayout";
import { blogPosts } from "@/lib/content/blogs";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title}: ${post.subtitle}`,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Yogic Company`,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const post = blogPosts[index];
  const related = [1, 2, 3].map((n) => blogPosts[(index + n) % blogPosts.length]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${post.title}: ${post.subtitle}`,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blogs/${post.slug}`,
  };

  return (
    <>
      <ArticleLayout
        item={post}
        basePath="/blogs"
        collectionLabel="Blogs"
        related={related}
        asideTitle="More from the journal"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
