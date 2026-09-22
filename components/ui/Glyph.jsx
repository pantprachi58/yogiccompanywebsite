const GLYPHS = {
  lotus: (
    <>
      <path d="M40 58c-12-6-20-16-22-28 12-2 23 1 31 8" />
      <path d="M40 58c12-6 20-16 22-28-12-2-23 1-31 8" />
      <path d="M40 58c-6-12-6-25 0-36 6 11 6 24 0 36Z" />
      <path d="M12 50c6 10 16 16 28 16s22-6 28-16" />
    </>
  ),
  breath: (
    <>
      <circle cx="40" cy="40" r="7" />
      <path d="M40 26c10-14 30-10 30 6s-22 24-30 30c-8-6-30-14-30-30s20-20 30-6Z" />
      <path d="M18 62h44" />
    </>
  ),
  stillness: (
    <>
      <circle cx="40" cy="24" r="8" />
      <path d="M22 66c0-12 8-20 18-20s18 8 18 20Z" />
      <path d="M12 66h56" />
      <path d="M26 40c-6 2-10 6-12 12" />
      <path d="M54 40c6 2 10 6 12 12" />
    </>
  ),
  mountain: (
    <>
      <path d="M8 62 30 26l12 18 10-14 20 32Z" />
      <path d="M40 62V38" />
    </>
  ),
  spiral: (
    <>
      <path d="M40 40c0-6 6-10 12-6s6 16-4 22-26 2-32-10 2-30 18-34 34 4 40 20" />
    </>
  ),
  wave: (
    <>
      <path d="M8 30c8-10 16-10 24 0s16 10 24 0 12-8 16-4" />
      <path d="M8 46c8-10 16-10 24 0s16 10 24 0 12-8 16-4" />
      <path d="M8 62c8-10 16-10 24 0s16 10 24 0 12-8 16-4" />
    </>
  ),
};

export default function Glyph({ name = "lotus", className = "", size = 80 }) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {GLYPHS[name] || GLYPHS.lotus}
    </svg>
  );
}
