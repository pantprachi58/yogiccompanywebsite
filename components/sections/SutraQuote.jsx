import Reveal from "@/components/ui/Reveal";

export default function SutraQuote({ sutra, className = "" }) {
  if (!sutra) return null;
  return (
    <Reveal className={className}>
      <blockquote className="yc-quote">
        <span className="yc-quote__sanskrit" lang="sa">
          {sutra.sanskrit}
        </span>
        {sutra.translation}
        <cite>{sutra.source}</cite>
      </blockquote>
    </Reveal>
  );
}
