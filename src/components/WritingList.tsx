import { Link } from "react-router-dom";

import { pieceLabel, type WritingPiece } from "@/content/writing";

const WritingList = ({ pieces }: { pieces: WritingPiece[] }) => (
  <ol>
    {pieces.map((piece) => (
      <li
        key={piece.slug}
        className="grid gap-x-5 gap-y-0.5 py-3 sm:grid-cols-[6.5rem_minmax(0,1fr)]"
      >
        <span className="mono pt-[3px] text-muted-foreground">
          {pieceLabel(piece)}
        </span>
        <div className="min-w-0">
          <h3 className="text-[16.5px] font-medium leading-snug">
            <Link to={`/writing/${piece.slug}`}>{piece.title}</Link>
          </h3>
        </div>
      </li>
    ))}
  </ol>
);

export default WritingList;
