import Reveal from "@/components/ui/Reveal";

export default function SutraQuote({ sutra, className = "" }) {
  if (!sutra) return null;
  return (
    <Reveal className={className}>
      <div className="yc-sutra-centered">
        <div className="yc-sutra-centered__yantra" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
            <path d="M20 8 L22 15 L20 20 L18 15 Z" fill="currentColor" opacity="0.4"/>
            <path d="M32 20 L25 22 L20 20 L25 18 Z" fill="currentColor" opacity="0.4"/>
            <path d="M20 32 L22 25 L20 20 L18 25 Z" fill="currentColor" opacity="0.4"/>
            <path d="M8 20 L15 22 L20 20 L15 18 Z" fill="currentColor" opacity="0.4"/>
            <path d="M26 14 L24 18 L20 20 L24 22 Z" fill="currentColor" opacity="0.3"/>
            <path d="M26 26 L24 22 L20 20 L22 24 Z" fill="currentColor" opacity="0.3"/>
            <path d="M14 26 L16 22 L20 20 L16 18 Z" fill="currentColor" opacity="0.3"/>
            <path d="M14 14 L16 18 L20 20 L18 16 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        <blockquote className="yc-sutra-centered__quote">
          <p className="yc-sutra-centered__sanskrit" lang="sa">
            {sutra.sanskrit}
          </p>
          {sutra.transliteration && (
            <p className="yc-sutra-centered__transliteration">
              {sutra.transliteration}
            </p>
          )}
          <p className="yc-sutra-centered__translation">{sutra.translation}</p>
          <cite className="yc-sutra-centered__source">{sutra.source}</cite>
        </blockquote>
      </div>
    </Reveal>
  );
}
