import { site } from "@/lib/site";
import { programs } from "@/lib/content/programs";
import { blogPosts } from "@/lib/content/blogs";
import { meditationArticles } from "@/lib/content/meditation";
import { sutraChapters } from "@/lib/content/sutras";
import { conditions } from "@/lib/content/conditions";
import { enquiryForms } from "@/lib/content/forms";

export default function sitemap() {
  const now = new Date();
  const page = (path, priority = 0.7, changeFrequency = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/aboutus", 0.9),
    page("/programs", 0.9),
    page("/classes", 0.9),
    page("/we-deal-with", 0.9),
    page("/healing", 0.8),
    page("/consultation", 0.8),
    page("/whitepaper", 0.8),
    page("/blogs", 0.8, "weekly"),
    page("/sutras", 0.8),
    page("/meditation", 0.8),
    page("/gallery", 0.6),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/book", 0.7),
    page("/access-to-stillness", 0.6),
    page("/privacy-policy", 0.3),
    page("/terms", 0.3),
    ...programs.map((p) => page(`/programs/${p.slug}`, 0.8)),
    ...conditions.map((c) => page(`/we-deal-with/${c.slug}`, 0.8)),
    ...enquiryForms.map((f) => page(`/enquiry/${f.slug}`, 0.5)),
    ...sutraChapters.map((s) => page(`/sutras/${s.slug}`, 0.6)),
    ...meditationArticles.map((m) => page(`/meditation/${m.slug}`, 0.6)),
    ...blogPosts.map((b) => page(`/blogs/${b.slug}`, 0.6)),
  ];
}
