// Writing is plain Markdown with a small front-matter header.
// Published pieces: src/content/writing/*.md (committed).
// Drafts: src/content/drafts/*.md (git-ignored, only visible in `npm run dev`).

export type WritingPiece = {
  slug: string;
  title: string;
  date: string;
  order: number;
  kind?: string;
  photo?: string;
  from?: string;
  body: string;
  draft: boolean;
};

const published = import.meta.glob("./writing/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const drafts = import.meta.env.DEV
  ? (import.meta.glob("./drafts/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    }) as Record<string, string>)
  : {};

// "03-happiness.md" → "happiness": the number only sets the reading order.
const slugFromPath = (path: string) =>
  path
    .split("/")
    .pop()!
    .replace(/\.md$/, "")
    .replace(/^\d+-/, "");

const parse = (path: string, raw: string, draft: boolean): WritingPiece => {
  const text = raw.replace(/\r\n/g, "\n");
  const meta: Record<string, string> = {};
  let body = text;

  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (match) {
    body = text.slice(match[0].length);
    for (const line of match[1].split("\n")) {
      const separator = line.indexOf(":");
      if (separator === -1) continue;
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
      if (key) meta[key] = value;
    }
  }

  return {
    slug: slugFromPath(path),
    title: meta.title || slugFromPath(path),
    date: meta.date || "",
    order: Number(meta.order) || Number.MAX_SAFE_INTEGER,
    kind: meta.kind || undefined,
    photo: meta.photo || undefined,
    from: meta.from || undefined,
    body: body.trim(),
    draft,
  };
};

export const writing: WritingPiece[] = [
  ...Object.entries(published).map(([path, raw]) => parse(path, raw, false)),
  ...Object.entries(drafts).map(([path, raw]) => parse(path, raw, true)),
].sort((a, b) => a.order - b.order || b.date.localeCompare(a.date));

export const findWriting = (slug: string | undefined) => writing.find((piece) => piece.slug === slug) ?? null;

export const writingForPhoto = (slug: string) => writing.find((piece) => piece.photo === slug) ?? null;

// What the small mono label shows: the date when there is one, otherwise the kind.
export const pieceLabel = (piece: WritingPiece) => {
  if (piece.draft) return "Draft";
  if (piece.date) return formatDate(piece.date);
  return piece.kind ?? "";
};

export const formatDate = (date: string) => {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};
