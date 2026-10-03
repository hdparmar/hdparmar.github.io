import { useState } from "react";
import { Link } from "react-router-dom";

import { sides, type Side, type Track } from "@/content/site";
import { trackButtonClick } from "@/lib/analytics";

const TrackTitle = ({ track }: { track: Track }) => {
  if (!track.href) return <>{track.title}</>;
  if (track.href.startsWith("/")) return <Link to={track.href}>{track.title}</Link>;
  return (
    <a href={track.href} target="_blank" rel="noopener noreferrer">
      {track.title}
    </a>
  );
};

// Selected work as two sides of the same coin: one column, flip to see the other face.
const Sides = () => {
  const [face, setFace] = useState<Side["key"]>("A");

  const flip = (key: Side["key"]) => {
    if (key === face) return;
    setFace(key);
    trackButtonClick(`work-side-${key.toLowerCase()}`, `Side ${key}`);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="text-[15px] text-muted-foreground">Two sides of the same coin.</p>
        <div role="group" aria-label="Choose a side" className="mono flex items-center gap-1">
          {sides.map((s, i) => (
            <span key={s.key} className="flex items-center gap-1">
              {i > 0 && <span className="text-muted-foreground" aria-hidden="true">/</span>}
              <button
                type="button"
                onClick={() => flip(s.key)}
                aria-pressed={face === s.key}
                className={`coin-face min-h-[40px] px-1.5 uppercase ${face === s.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="text-accent">{s.key}</span> · {s.name}
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Both faces share one grid cell, so the band keeps the height of the taller side when flipped. */}
      <div className="mt-5 grid">
        {sides.map((s) => {
          const active = s.key === face;
          return (
            <ol
              key={s.key}
              aria-label={`Side ${s.key}: ${s.name}`}
              aria-hidden={!active}
              className={`[grid-area:1/1] ${active ? "coin-flip" : "invisible"}`}
            >
              {s.tracks.map((track) => (
                <li key={track.id} className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] gap-x-3 py-2.5">
                  <span className="mono pt-[3px] text-accent">{track.id}</span>
                  <div className="min-w-0">
                    <h3 className="text-[16.5px] font-medium leading-snug">
                      <TrackTitle track={track} />
                    </h3>
                    <p className="mt-0.5 text-[15px] leading-relaxed text-muted-foreground">{track.body}</p>
                  </div>
                  <span className="mono pt-[3px] text-muted-foreground">{track.year}</span>
                </li>
              ))}
            </ol>
          );
        })}
      </div>
    </div>
  );
};

export default Sides;
