// The film-edge strip of frame numbers running down the left side on wide screens.
const frames = Array.from({ length: 48 }, (_, i) => `${i + 1} ▸ ${i + 1}A`).join(" ▸ ");
const strip = `HP 400 ▸ ${frames} ▸ HP 400`;

const FilmRail = () => (
  <div
    aria-hidden="true"
    className="mono pointer-events-none absolute bottom-0 left-[22px] top-0 hidden overflow-hidden whitespace-nowrap text-accent opacity-50 [writing-mode:vertical-rl] min-[900px]:block"
  >
    {strip} ▸ {strip}
  </div>
);

export default FilmRail;
