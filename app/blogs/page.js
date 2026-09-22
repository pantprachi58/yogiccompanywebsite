import PageHeader from "@/components/ui/PageHeader";
import ArticleIndex from "@/components/sections/ArticleIndex";
import CtaBand from "@/components/sections/CtaBand";
import { blogPosts } from "@/lib/content/blogs";

export const metadata = {
  title: "Blogs",
  description:
    "Writing from Yogic Company on breath, rest, nature, chronic health, emotional wellbeing and the mind — practical notes for people who practise.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Blogs"
        breadcrumb={[{ label: "Blogs" }]}
        intro="Notes on breath, rest, nature, chronic health and the mind — written for people who practise."
      />
      <ArticleIndex items={blogPosts} basePath="/blogs" />
      <CtaBand
        title="Reading is a good start. Practising is better."
        text="Bring a question from any of these into a session and we will work with it."
        primary={{ label: "Start an enquiry", href: "/enquiry/general" }}
        secondary={{ label: "See our classes", href: "/classes" }}
      />
    </>
  );
}
