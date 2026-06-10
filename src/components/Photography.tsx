import { useState } from "react";

import lightsOutdoor from "@/assets/film-photos/lights-outdoor.jpg";
import metroArt from "@/assets/film-photos/metro-art.jpg";
import tenstaStation from "@/assets/film-photos/tensta-station.jpg";
import strawberries from "@/assets/film-photos/strawberries.jpg";
import architecture from "@/assets/film-photos/architecture.jpg";
import archway from "@/assets/film-photos/archway.jpg";
import rooftops from "@/assets/film-photos/rooftops.jpg";
import bluePalace from "@/assets/film-photos/blue-palace.jpg";
import tannery from "@/assets/film-photos/tannery.jpg";
import mountainCity from "@/assets/film-photos/mountain-city.jpg";

type PhotoEssay = {
  id: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  addedAt: string;
  dateLabel: string;
  excerpt: string;
  note: string;
};

const photoEssays: PhotoEssay[] = [
  {
    id: "lights-outdoor",
    title: "Night Lights Outside",
    src: lightsOutdoor,
    alt: "Night lights outdoor",
    width: 1824,
    height: 1219,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "A small pool of light holding the street still for a second.",
    note: "The frame works because it stays modest: no skyline, no spectacle, just the edge of a night scene asking for patience.",
  },
  {
    id: "metro-art",
    title: "Metro Surface",
    src: metroArt,
    alt: "Metro station art installation",
    width: 1920,
    height: 1284,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "Colour and transit infrastructure sharing the same concrete rhythm.",
    note: "I keep coming back to stations because they are designed for passing through, yet the best corners slow you down anyway.",
  },
  {
    id: "tensta-station",
    title: "Tensta Station",
    src: tenstaStation,
    alt: "Tensta metro station",
    width: 1920,
    height: 1284,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "A platform view where the geometry does most of the talking.",
    note: "The photograph is less about arrival than waiting: parallel lines, surface texture, and the quiet certainty of public space.",
  },
  {
    id: "strawberries",
    title: "Market Strawberries",
    src: strawberries,
    alt: "Market strawberries",
    width: 1278,
    height: 1920,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "A bright, ordinary pile of fruit doing the work of a memory.",
    note: "This is the kind of frame that depends on restraint: leave the scene alone and let the colour carry the feeling.",
  },
  {
    id: "architecture",
    title: "Stair Geometry",
    src: architecture,
    alt: "Architecture with stairs",
    width: 1824,
    height: 1213,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "Stairs, shadow, and a hard architectural edge.",
    note: "The frame reads like a diagram until the light softens it. That tension is the point.",
  },
  {
    id: "archway",
    title: "Through the Archway",
    src: archway,
    alt: "View through archway",
    width: 1281,
    height: 1920,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "A vertical frame that turns a passage into a pause.",
    note: "Doorways and arches are simple machines for attention: they crop the world before the camera does.",
  },
  {
    id: "rooftops",
    title: "Rooftops at Dusk",
    src: rooftops,
    alt: "Rooftops at dusk",
    width: 1824,
    height: 1215,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "The city flattening into rooflines as the light leaves.",
    note: "Dusk makes cities briefly legible. The details recede, and the outline becomes the subject.",
  },
  {
    id: "blue-palace",
    title: "Blue Palace",
    src: bluePalace,
    alt: "Blue palace architecture",
    width: 1824,
    height: 1215,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "A formal facade held together by colour and repetition.",
    note: "The building gives the photograph its order. The camera just chooses how much of that order to admit.",
  },
  {
    id: "tannery",
    title: "Tannery",
    src: tannery,
    alt: "Traditional tannery",
    width: 1216,
    height: 1824,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "Texture, labour, and pattern compressed into one vertical frame.",
    note: "Some places resist being made tidy. This frame keeps the density instead of smoothing it out.",
  },
  {
    id: "mountain-city",
    title: "Mountain City",
    src: mountainCity,
    alt: "City by mountain",
    width: 1216,
    height: 1824,
    addedAt: "2026-01-14",
    dateLabel: "Added Jan 2026",
    excerpt: "Buildings gathered below a slope, with scale doing the quiet work.",
    note: "The mountain changes the city around it: streets, rooflines, and shadows all answer to the larger shape.",
  },
];

const INITIAL_VISIBLE_COUNT = 4;

const Photography = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sortedPhotos = [...photoEssays].sort((a, b) => b.addedAt.localeCompare(a.addedAt));
  const visiblePhotos = sortedPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPhotos.length;

  return (
    <section id="photography" aria-labelledby="photography-heading" className="py-12 md:py-14">
      <div className="border-t border-border pt-5">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="photography-heading" className="text-xl font-semibold text-foreground md:text-2xl">
            Film Photography
          </h2>
          <p className="text-sm font-extralight text-muted-foreground">
            {sortedPhotos.length} frames
          </p>
        </div>

        <div className="divide-y divide-border/80 border-b border-border/80">
          {visiblePhotos.map((photo) => {
            const expanded = expandedId === photo.id;

            return (
              <article key={photo.id} className="grid gap-5 py-6 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] md:gap-7">
                <figure className="min-w-0">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    className="h-auto w-full bg-card"
                  />
                </figure>

                <div className="flex min-w-0 flex-col justify-between gap-5">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">{photo.dateLabel}</p>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold leading-6 text-foreground">{photo.title}</h3>
                      <p className="text-sm font-light leading-6 text-muted-foreground">
                        {photo.excerpt}
                      </p>
                      <p
                        id={`${photo.id}-note`}
                        hidden={!expanded}
                        className="text-sm font-light leading-6 text-muted-foreground"
                      >
                        {photo.note}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-fit text-sm font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-expanded={expanded}
                    aria-controls={`${photo.id}-note`}
                    onClick={() => setExpandedId(expanded ? null : photo.id)}
                  >
                    {expanded ? "Read less" : "Read more →"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className="pt-6">
            <button
              type="button"
              className="btn-rustic-hover h-10 border border-border bg-transparent px-4 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => setVisibleCount((count) => Math.min(count + INITIAL_VISIBLE_COUNT, sortedPhotos.length))}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Photography;
