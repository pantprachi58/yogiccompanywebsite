import { notFound } from "next/navigation";
import ArticleLayout from "@/components/sections/ArticleLayout";
import { meditationArticles } from "@/lib/content/meditation";

export function generateStaticParams() {
  return meditationArticles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = meditationArticles.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title}: ${item.subtitle}`,
    description: item.excerpt,
    alternates: { canonical: `/meditation/${item.slug}` },
    openGraph: {
      type: "article",
      title: `${item.title} | Yogic Company`,
      description: item.excerpt,
      images: [{ url: item.image }],
    },
  };
}

export default async function MeditationArticlePage({ params }) {
  const { slug } = await params;
  const index = meditationArticles.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const related = [1, 2, 3].map((n) => meditationArticles[(index + n) % meditationArticles.length]);
  return (
    <ArticleLayout
      item={meditationArticles[index]}
      basePath="/meditation"
      collectionLabel="Meditation"
      related={related}
      asideTitle="More meditation practices"
      cta={{
        title: "Find the practice your mind settles into",
        text: "Tell us how you would like to practise and we will suggest a starting point.",
        primary: { label: "Access to Stillness", href: "/access-to-stillness" },
        secondary: { label: "Contact us", href: "/contact" },
      }}
    />
  );
}
