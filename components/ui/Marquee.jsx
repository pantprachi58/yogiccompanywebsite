export default function Marquee({ items = [], className = "" }) {
  const loop = [...items, ...items];
  return (
    <div className={`yc-band-wrap ${className}`.trim()} aria-hidden="true">
      <div className="yc-band">
        <div className="yc-band__track">
          {loop.map((item, i) => (
            <span className="yc-band__item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
