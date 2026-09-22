import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/content/blogs";

// The four posts the live home page features, in the same order.
const FEATURED = ["forest-bathing", "personal-space", "toxic-positivity", "loneliness-epidemic"];

export default function JournalPreview() {
  const featured = FEATURED.map((slug) => blogPosts.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section className="yc-section yc-bg-cream-light">
      <div className="yc-container">
        <Reveal className="d-flex flex-wrap gap-4 justify-content-between align-items-end">
          <SectionHeading
            eyebrow="Blogs"
            title="Writing from the practice"
            text="Notes on breath, rest, nature and the mind — written for people who practise."
            className="mb-0"
          />
          <Button href="/blogs" variant="outline">
            View all the blogs
          </Button>
        </Reveal>

        <div className="row g-4 mt-4">
          {featured.map((post, i) => (
            <Reveal className="col-sm-6 col-lg-3" key={post.slug} delay={i * 90}>
              <ArticleCard item={post} basePath="/blogs" cta="Read more" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
