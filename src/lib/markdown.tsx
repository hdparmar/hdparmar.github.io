import { Fragment, type ReactNode } from "react";

// A deliberately tiny Markdown renderer for writing pieces. It never rewrites
// words: it only splits blocks on blank lines, keeps single line breaks (so
// poems keep their shape), and understands *italic*, **bold**, "> " quotes,
// "## " headings and a "* * *" section break.

const renderInline = (text: string, keyPrefix: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-${i++}`}>{token.slice(2, -2)}</strong>);
    } else {
      nodes.push(<em key={`${keyPrefix}-${i++}`}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
};

const renderLines = (lines: string[], keyPrefix: string) =>
  lines.map((line, index) => (
    <Fragment key={`${keyPrefix}-${index}`}>
      {index > 0 && <br />}
      {renderInline(line, `${keyPrefix}-${index}`)}
    </Fragment>
  ));

export const Markdown = ({ source }: { source: string }) => {
  const blocks = source.split(/\n\s*\n/).map((block) => block.replace(/\s+$/, "")).filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        const key = `b${index}`;
        const lines = block.split("\n");

        if (/^(\*\s*){3,}$|^(-\s*){3,}$/.test(block.trim())) {
          return <hr key={key} />;
        }
        if (block.startsWith("## ")) {
          return <h2 key={key}>{renderInline(block.slice(3), key)}</h2>;
        }
        if (lines.every((line) => line.startsWith(">"))) {
          return (
            <blockquote key={key}>
              <p>{renderLines(lines.map((line) => line.replace(/^>\s?/, "")), key)}</p>
            </blockquote>
          );
        }
        return <p key={key}>{renderLines(lines, key)}</p>;
      })}
    </>
  );
};
