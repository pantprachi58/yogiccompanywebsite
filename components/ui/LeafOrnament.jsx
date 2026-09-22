export default function LeafOrnament({ className = "", ...rest }) {
  return (
    <svg
      viewBox="0 0 240 180"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M6 174C48 154 84 126 112 92c28-34 44-60 50-86" />
      <path d="M56 138c-4-26 4-46 24-58 20-12 34-12 42-4 8 8 6 26-8 42-14 16-36 22-58 20Z" />
      <path d="M112 92c-2-28 8-48 30-58 22-10 38-8 46 2 8 10 2 28-16 42-18 14-40 18-60 14Z" />
      <path d="M150 46c6-18 18-30 36-36" />
    </svg>
  );
}
