import { Camera } from "lucide-react";

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

const photos = [
  { src: lightsOutdoor, alt: "Night lights outdoor", aspect: "landscape" },
  { src: metroArt, alt: "Metro station art installation", aspect: "landscape" },
  { src: tenstaStation, alt: "Tensta metro station", aspect: "landscape" },
  { src: strawberries, alt: "Market strawberries", aspect: "portrait" },
  { src: architecture, alt: "Architecture with stairs", aspect: "landscape" },
  { src: archway, alt: "View through archway", aspect: "portrait" },
  { src: rooftops, alt: "Rooftops at dusk", aspect: "landscape" },
  { src: bluePalace, alt: "Blue palace architecture", aspect: "landscape" },
  { src: tannery, alt: "Traditional tannery", aspect: "portrait" },
  { src: mountainCity, alt: "City by mountain", aspect: "portrait" },
];

const Photography = () => {
  return (
    <section id="photography" className="py-24">
      <div className="container max-w-4xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-3">
          <Camera className="h-6 w-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Film Photography
          </h2>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`overflow-hidden ${
                photo.aspect === "portrait" ? "row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
