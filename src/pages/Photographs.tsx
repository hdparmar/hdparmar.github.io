import { Link } from "react-router-dom";

import { frameLabel, photoMeta, photoSrc, photographs } from "@/content/photographs";
import { writingForPhoto } from "@/content/writing";

// The album: one frame per row at its own shape, with a quiet line of facts above.
const Photographs = () => (
  <main>
    <header className="page-column pt-10 md:pt-14">
      <h1 className="text-[clamp(1.75rem,4.4vw,2.35rem)] font-semibold leading-tight tracking-[-0.01em]">Photographs</h1>
      <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.65] text-muted-foreground">
        Frames from walks with a film camera. Open one to see it on its own; some have writing beside them.
      </p>
    </header>

    <ol className="photo-column mt-16 flex flex-col gap-20 md:gap-28">
      {photographs.map((photo, index) => {
        const piece = writingForPhoto(photo.slug);
        return (
          <li key={photo.slug}>
            <figure>
              <figcaption className="mono mb-3 flex flex-wrap gap-x-3 gap-y-1 text-muted-foreground">
                <span className="text-accent">▸ {frameLabel(index)}</span>
                <span>{photo.title}</span>
                <span>{photoMeta(photo)}</span>
                {piece && (
                  <Link to={`/writing/${piece.slug}`} className="plain-link text-foreground">
                    Read ⇢
                  </Link>
                )}
              </figcaption>
              <Link to={`/photographs/${photo.slug}`} className="block" aria-label={`Open ${photo.title}`}>
                <img
                  src={photoSrc(photo.slug)}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="album-photo bg-muted"
                />
              </Link>
            </figure>
          </li>
        );
      })}
    </ol>
  </main>
);

export default Photographs;
