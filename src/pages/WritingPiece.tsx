import { Link, Navigate, useParams } from "react-router-dom";

import { findPhotograph, photoMeta, photoSrc } from "@/content/photographs";
import { findWriting, formatDate } from "@/content/writing";
import { Markdown } from "@/lib/markdown";

const WritingPiece = () => {
  const { slug } = useParams();
  const piece = findWriting(slug);
  if (!piece) return <Navigate to="/writing" replace />;

  const photo = piece.photo ? findPhotograph(piece.photo)?.photo : undefined;
  const meta = [piece.draft && "Draft", piece.date && formatDate(piece.date), piece.kind, piece.from && `from ${piece.from}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <main>
      <header className="page-column pt-10 md:pt-14">
        <p className="mono text-muted-foreground">{meta}</p>
        <h1 className="mt-3 text-[clamp(1.75rem,4.4vw,2.35rem)] font-semibold leading-tight tracking-[-0.01em]">
          {piece.title}
        </h1>
      </header>

      {photo && (
        <figure className="photo-column mt-10">
          <Link to={`/photographs/${photo.slug}`} className="block" aria-label={`Open ${photo.title}`}>
            <img
              src={photoSrc(photo.slug)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="album-photo bg-muted"
            />
          </Link>
          <figcaption className="mono mt-3 text-muted-foreground">
            {photo.title} · {photoMeta(photo)}
          </figcaption>
        </figure>
      )}

      <article className="page-column prose-writing mt-12">
        <Markdown source={piece.body} />
      </article>

      <nav className="page-column mono mt-14">
        <Link to="/writing" className="plain-link inline-flex min-h-[44px] items-center">
          ← All writing
        </Link>
      </nav>
    </main>
  );
};

export default WritingPiece;
