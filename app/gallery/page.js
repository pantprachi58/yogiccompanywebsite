import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import { galleryImages } from "@/lib/content/gallery";

export const metadata = {
  title: "Gallery",
  description:
    "Images from the Yogic Company practice — group sessions, teaching, our materials and the natural world that shapes how we teach.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        breadcrumb={[{ label: "Gallery" }]}
        intro="Moments from the practice, our teaching and the natural world that shapes how we work."
      />

      <section className="yc-section yc-bg-cream-light">
        <div className="yc-container">
          <Reveal>
            <GalleryGrid images={galleryImages} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
