export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  as: Tag = "h2",
  className = "",
  children,
}) {
  const classes = [
    "yc-heading",
    align === "center" ? "yc-heading--center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow ? <span className="yc-eyebrow">{eyebrow}</span> : null}
      {title ? <Tag className="yc-heading__title">{title}</Tag> : null}
      {text ? <p className="yc-lead yc-heading__text">{text}</p> : null}
      {children}
    </div>
  );
}
