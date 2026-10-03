import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  frame: string;
  children: ReactNode;
  aside?: ReactNode;
};

// "▸ 01  SELECTED WORK" over a solid ink rule, like the inner sleeve of a record.
const SectionHeading = ({ id, frame, children, aside }: SectionHeadingProps) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-foreground pb-3">
    <h2 id={id} className="mono flex items-baseline gap-3 font-normal">
      <span className="text-accent">▸ {frame}</span>
      <span>{children}</span>
    </h2>
    {aside}
  </div>
);

export default SectionHeading;
