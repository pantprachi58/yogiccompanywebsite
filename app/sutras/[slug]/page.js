import { notFound } from "next/navigation";
import ArticleLayout from "@/components/sections/ArticleLayout";
import { sutraChapters } from "@/lib/content/sutras";

export function generateStaticParams() {
  return sutraChapters.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = sutraChapters.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${item.subtitle}`,
    description: `${item.title}: ${item.subtitle}. Patanjali's Yoga Sutras with transliteration, meaning, real-life examples and exercises.`,
    alternates: { canonical: `/sutras/${item.slug}` },
    openGraph: {
      type: "article",
      title: `${item.title} — ${item.subtitle} | Yogic Company`,
      images: [{ url: item.image }],
    },
  };
}

export default async function SutraChapterPage({ params }) {
  const { slug } = await params;
  const index = sutraChapters.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const related = [1, 2, 3].map((n) => sutraChapters[(index + n) % sutraChapters.length]);
  return (
    <ArticleLayout
      item={sutraChapters[index]}
      basePath="/sutras"
      collectionLabel="Sutras"
      related={related}
      asideTitle="Other chapters"
      cta={{
        title: "Study alongside your practice",
        text: "The sutras make most sense when they are practised. Join a class and bring your questions.",
        primary: { label: "Join a class", href: "/classes" },
        secondary: { label: "Meditation series", href: "/meditation" },
      }}
    />
  );
}
