export default function Reveal({
  as: Tag = "div",
  animation = "fade-up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={className}
      data-aos={animation}
      data-aos-delay={delay || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
