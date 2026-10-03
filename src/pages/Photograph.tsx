import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { findPhotograph, frameLabel, photoSrc, photographs } from "@/content/photographs";
import { pieceLabel, writingForPhoto } from "@/content/writing";
import { Markdown } from "@/lib/markdown";

// One frame on its own page. ← and → step through the album, Esc goes back to it.
const Photograph = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const entry = findPhotograph(slug);

  const prev = entry ? photographs[(entry.index - 1 + photographs.length) % photographs.length] : null;
  const next = entry ? photographs[(entry.index + 1) % photographs.length] : null;

  useEffect(() => {
    if (!prev || !next) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (event.key === "ArrowLeft") navigate(`/photographs/${prev.slug}`);
      if (event.key === "ArrowRight") navigate(`/photographs/${next.slug}`);
      if (event.key === "Escape") navigate("/photographs");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, prev, next]);

  useEffect(() => {
    // Warm the neighbours so stepping through feels instant.
    [prev, next].forEach((photo) => {
      if (photo) new Image().src = photoSrc(photo.slug);
    });
  }, [prev, next]);

  if (!entry || !prev || !next) return <Navigate to="/photographs" replace />;

  const { photo, index } = entry;
  const piece = writingForPhoto(photo.slug);
  const facts: [string, string | undefined][] = [
    ["Frame", frameLabel(index)],
    ["Place", photo.place],
    ["Date", photo.date],
    ["Film", photo.film],
    ["Camera", photo.camera],
  ];

  return (
    <main>
      <figure className="photo-stage mt-10 md:mt-14">
        <img
          src={photoSrc(photo.slug)}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="single-photo mx-auto block bg-muted"
        />
      </figure>

      <div className="page-column mt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-foreground pb-3">
          <h1 className="text-[22px] font-medium leading-tight">{photo.title}</h1>
          <Link to="/photographs" className="mono plain-link text-muted-foreground">
            All photographs
          </Link>
        </div>

        <dl className="mt-4 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-y-1.5">
          {facts
            .filter(([, value]) => value)
            .map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="mono pt-[2px] text-muted-foreground">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
        </dl>

        {piece && (
          <article className="prose-writing mt-12">
            <h2 className="!mt-0 text-[20px] font-medium">
              <Link to={`/writing/${piece.slug}`}>{piece.title}</Link>
            </h2>
            <p className="mono !mt-1 text-muted-foreground">{pieceLabel(piece)}</p>
            <Markdown source={piece.body} />
          </article>
        )}

        <nav aria-label="Photographs" className="mono mt-12 flex items-center justify-between gap-4">
          <Link to={`/photographs/${prev.slug}`} className="plain-link inline-flex min-h-[44px] items-center">
            ← {frameLabel((index - 1 + photographs.length) % photographs.length)}
          </Link>
          <span className="hidden text-muted-foreground md:inline">← → to move · Esc for all</span>
          <Link to={`/photographs/${next.slug}`} className="plain-link inline-flex min-h-[44px] items-center">
            {frameLabel((index + 1) % photographs.length)} →
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Photograph;
