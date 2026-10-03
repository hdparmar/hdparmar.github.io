import { Link } from "react-router-dom";

import ContactLinks from "@/components/ContactLinks";
import PhotoStrip from "@/components/PhotoStrip";
import SectionHeading from "@/components/SectionHeading";
import Sides from "@/components/Sides";
import WritingList from "@/components/WritingList";
import { photographs } from "@/content/photographs";
import { quote } from "@/content/site";
import { writing } from "@/content/writing";

const Index = () => {
  const firstWriting = writing.slice(0, 4);
  const frames = { work: "01", writing: "02", photographs: firstWriting.length ? "03" : "02" };

  return (
    <main>
      <header className="page-column pt-10 md:pt-14">
        <h1 className="name-title">Harshdeep Parmar</h1>
        <p className="mt-2 text-base text-muted-foreground">/ˈhɑːrʃ.diːp pɑːr.mɑːr/</p>

        <div className="mt-9 flex flex-col gap-5 text-[17px] leading-[1.65]">
          <p>
            I’m an embedded engineer in Stockholm. I write firmware for devices that listen: microphones, signal
            processing, and small machine-learning models squeezed onto microcontrollers and embedded Linux.
          </p>
          <p className="text-muted-foreground">
            These days I’m building firmware for audio-reactive lighting for a client, making{" "}
            <a href="https://tonestruments.se" target="_blank" rel="noopener noreferrer" className="text-link">
              Nadilo
            </a>
            , a game that teaches beat-making by ear, and learning embedded Linux on a Milk-V Duo.
          </p>
          <p className="text-muted-foreground">I also shoot film and write.</p>
          <figure className="border-l border-accent/60 pl-4">
            <blockquote className="text-foreground">“{quote.text}”</blockquote>
            <figcaption className="mono mt-1 text-muted-foreground">
              {quote.author}, <cite className="not-italic">{quote.source}</cite>
            </figcaption>
          </figure>
        </div>

        <div className="mt-7">
          <ContactLinks />
        </div>
      </header>

      {/* A quiet band between the introduction and everything else. */}
      <section aria-labelledby="work" className="mt-20 bg-card py-14 md:mt-24 md:py-16">
        <div className="page-column">
          <SectionHeading id="work" frame={frames.work}>
            Selected work
          </SectionHeading>
          <div className="mt-5">
            <Sides />
          </div>
        </div>
      </section>

      <div className="page-column">
        {firstWriting.length > 0 && (
          <section aria-labelledby="writing" className="mt-20 md:mt-24">
            <SectionHeading
              id="writing"
              frame={frames.writing}
              aside={
                <Link to="/writing" aria-label={`All writing (${writing.length})`} className="mono plain-link text-muted-foreground">
                  {writing.length} ⇢
                </Link>
              }
            >
              Writing
            </SectionHeading>
            <div className="mt-3">
              <WritingList pieces={firstWriting} />
            </div>
          </section>
        )}

        <section aria-labelledby="photographs" className="mt-20 md:mt-24">
          <SectionHeading
            id="photographs"
            frame={frames.photographs}
            aside={
              <Link
                to="/photographs"
                aria-label={`All photographs (${photographs.length})`}
                className="mono plain-link text-muted-foreground"
              >
                {photographs.length} ⇢
              </Link>
            }
          >
            Photographs
          </SectionHeading>
          <div className="mt-5">
            <PhotoStrip />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
