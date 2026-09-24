import SiteLink from "@/components/ui/SiteLink";

const VARIANTS = {
  primary: "",
  outline: "yc-btn--outline",
  light: "yc-btn--light",
  ghostLight: "yc-btn--ghost-light",
};

const SIZES = { sm: "yc-btn--sm", md: "", lg: "yc-btn--lg" };

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = ["yc-btn", VARIANTS[variant] || "", SIZES[size] || "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a className={classes} href={href} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <SiteLink className={classes} href={href} {...rest}>
        {children}
      </SiteLink>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
