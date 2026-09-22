import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" breadcrumb={[{ label: "404" }]} />
      <section className="yc-section yc-bg-cream-light text-center">
        <div className="yc-container">
          <p className="yc-lead mx-auto">
            The page you were looking for is not here. It may have moved, or the
            link may be out of date.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Button href="/">Back to home</Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
