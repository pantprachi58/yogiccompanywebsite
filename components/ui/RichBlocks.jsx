import Image from "next/image";

/**
 * Renders the structured content blocks produced by the content migration.
 * Block shapes: {type:"h2"|"h3"|"p", html} | {type:"ul"|"ol", items} | {type:"image", src}
 * `html` only ever contains a whitelisted set of inline tags (a/strong/em/b/i/sup/sub),
 * produced at migration time — there is no user-supplied markup here.
 */
export default function RichBlocks({ blocks = [], startLevel = 2 }) {
  const H2 = startLevel === 3 ? "h3" : "h2";
  const H3 = startLevel === 3 ? "h4" : "h3";

  return (
    <>
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "h2":
            return <H2 key={key} dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "h3":
            return <H3 key={key} dangerouslySetInnerHTML={{ __html: block.html }} />;
          case "ul":
            return (
              <ul key={key}>
                {block.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key}>
                {block.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            );
          case "image":
            return (
              <figure key={key} className="yc-shape-soft my-4">
                <Image src={block.src} alt="" width={1200} height={800} sizes="(max-width: 767px) 92vw, 46rem" style={{ width: "100%", height: "auto" }} />
              </figure>
            );
          case "p":
          default:
            return (
              <p
                key={key}
                className={block.lead ? "yc-lead" : undefined}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );
        }
      })}
    </>
  );
}
