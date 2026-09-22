import Link from "next/link";
import LeafOrnament from "@/components/ui/LeafOrnament";

export default function PageHeader({ title, breadcrumb = [], intro }) {
  return (
    <section className="yc-pagehead">
      <LeafOrnament className="yc-pagehead__leaf yc-pagehead__leaf--l" />
      <LeafOrnament className="yc-pagehead__leaf yc-pagehead__leaf--r" />
      <div className="yc-container">
        <h1 className="yc-pagehead__title">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="yc-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            {breadcrumb.map((crumb, i) => (
              <li key={crumb.href || crumb.label}>
                {i === breadcrumb.length - 1 || !crumb.href ? (
                  <span aria-current="page">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href}>{crumb.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {intro ? (
          <p className="yc-lead mx-auto mt-3" style={{ maxWidth: "44rem", position: "relative" }}>
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
