import { Link } from "react-router-dom";

import { findPhotograph, frameLabel, previewSlugs, thumbSrc } from "@/content/photographs";

// A contact-sheet row of four frames. On a phone it becomes a swipeable strip.
const PhotoStrip = () => {
  const frames = previewSlugs.map((slug) => findPhotograph(slug)).filter((entry) => entry !== null);

  return (
    <div className="-mr-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pr-6 [scrollbar-width:none] md:mr-0 md:grid md:grid-cols-4 md:overflow-visible md:pr-0 [&::-webkit-scrollbar]:hidden">
      {frames.map(({ photo, index }) => (
        <figure key={photo.slug} className="w-[78%] shrink-0 snap-start md:w-auto">
          <Link to={`/photographs/${photo.slug}`} className="block" aria-label={`${photo.title}, ${photo.place}`}>
            <img
              src={thumbSrc(photo.slug)}
              alt={photo.alt}
              width={640}
              height={Math.round((640 * photo.height) / photo.width)}
              loading="lazy"
              className="aspect-[3/2] w-full bg-muted object-cover transition-opacity duration-300 hover:opacity-90"
            />
          </Link>
          <figcaption className="mt-2 flex flex-col gap-0.5 text-sm text-muted-foreground">
            <span className="mono text-accent">▸ {frameLabel(index)}</span>
            <span>
              {photo.title}, {photo.place}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PhotoStrip;
