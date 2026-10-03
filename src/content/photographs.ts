// The film album. Order here is the order on /photographs.
// Images live in public/photographs/<slug>.jpg (1600px) and
// public/photographs/thumbs/<slug>.jpg (640px).

export type Photograph = {
  slug: string;
  title: string;
  place: string;
  alt: string;
  width: number;
  height: number;
  date?: string;
  film?: string;
  camera?: string;
};

export const photographs: Photograph[] = [
  { slug: "odenplan", title: "Odenplan", place: "Stockholm", film: "CineStill 800T", width: 1600, height: 1070, alt: "Commuters under a ceiling of glowing orange waveform lines at Odenplan station" },
  { slug: "idrefjall-lake", title: "Frozen lake", place: "Idrefjäll", camera: "Minolta 505si", width: 1600, height: 1065, alt: "A frozen lake below a forested ridge, a row of houses along the shore, black and white" },
  { slug: "chefchaouen-window", title: "Window", place: "Chefchaouen", date: "Feb 2025", width: 1600, height: 1067, alt: "A dark room with coloured glass above a window that looks out over a blue town at dusk" },
  { slug: "bucharest-cat", title: "Cat at a white wall", place: "Bucharest", width: 1600, height: 1073, alt: "A black and white cat sitting against a white wall in a patch of sunlight" },
  { slug: "malta-wake", title: "Wake", place: "Malta", width: 1600, height: 1073, alt: "White wake churning behind a boat on deep blue water, a low coastline behind" },
  { slug: "footbridge", title: "Footbridge", place: "Stockholm", width: 1600, height: 1075, alt: "A footbridge in silhouette between buildings, two bright clouds above, black and white" },
  { slug: "volubilis", title: "Arches", place: "Volubilis", date: "Feb 2025", width: 1600, height: 1067, alt: "Three Roman stone arches framing green plains and distant mountains" },
  { slug: "reeds", title: "Reeds", place: "Stockholm", film: "LomoChrome Purple", width: 1600, height: 1067, alt: "Pink reeds along a lake edge with a dark tree line behind" },
  { slug: "bare-trees", title: "Bare trees", place: "Stockholm", width: 1600, height: 1073, alt: "Leafless branches against a grey winter sky, black and white" },
  { slug: "chess", title: "Giant chess", place: "Moldova", width: 1600, height: 1065, alt: "Large black and white chess pieces on an outdoor board" },
  { slug: "slussen", title: "Slussen", place: "Stockholm", width: 1600, height: 1075, alt: "Railway tracks at Slussen leading towards Riddarholmen, black and white, light leaks across the sky" },
  { slug: "chefchaouen-cats", title: "Three cats", place: "Chefchaouen", date: "Feb 2025", width: 1600, height: 1067, alt: "Three cats curled up on a pale blue street beside painted flower pots" },
  { slug: "tbana", title: "Platform", place: "Stockholm", film: "CineStill 800T", width: 1600, height: 1070, alt: "An empty underground platform with orange ceiling lights and a painted cave wall" },
  { slug: "bucharest-adopta", title: "ADOPTĂ", place: "Bucharest", width: 1600, height: 1073, alt: "A stray dog crossing pale sand in front of a wall painted with the word ADOPTĂ" },
  { slug: "midsommar", title: "Midsommar pole", place: "Stockholm", width: 1600, height: 1073, alt: "A leaf-covered midsummer pole seen from below against blue sky and clouds" },
  { slug: "sun-on-water", title: "Sun on the water", place: "Sweden", film: "Ilford HP5", date: "Aug 2025", width: 1075, height: 1600, alt: "The sun low over open water, light scattered across the surface, black and white" },
  { slug: "morocco-pots", title: "Pots drying", place: "Morocco", date: "Feb 2025", width: 1600, height: 1067, alt: "Rows of unglazed clay bowls and pots drying in the sun in a whitewashed courtyard" },
  { slug: "bucharest-windows", title: "Two windows", place: "Bucharest", date: "2024", width: 1600, height: 1065, alt: "Two small dark windows on a bright white wall, black and white" },
  { slug: "malta-salt-pans", title: "Salt pans", place: "Malta", width: 1600, height: 1073, alt: "Square salt pans cut into flat rock beside the sea" },
  { slug: "night-water", title: "Night water", place: "Stockholm", film: "CineStill 800T", width: 1600, height: 1070, alt: "City lights reflected in dark water at night" },
  { slug: "bucharest-wires", title: "Tram wires", place: "Bucharest", width: 1600, height: 1073, alt: "Overhead tram wires crossing a pale sky above a crane and a block of flats, black and white" },
  { slug: "wine-cellar", title: "Cellar", place: "Moldova", width: 1600, height: 1065, alt: "A long underground wine cellar with arched white shelves of bottles" },
  { slug: "shadows", title: "Four shadows", place: "Stockholm", width: 1600, height: 1073, alt: "Four long shadows on a sunlit street, two of them making a heart with their hands, black and white" },
  { slug: "rooftops-dusk", title: "Rooftops at dusk", place: "Stockholm", width: 1600, height: 1067, alt: "Stockholm rooftops in silhouette against an orange dusk sky" },
  { slug: "idrefjall-house", title: "House by the pond", place: "Idrefjäll", camera: "Minolta 505si", width: 1600, height: 1065, alt: "A house beside tall spruce trees and a frozen pond in winter, black and white" },
];

// The four frames shown on the landing page.
export const previewSlugs = ["odenplan", "chefchaouen-window", "bucharest-cat", "malta-wake"];

// The footer photograph, faded at the top into the page.
export const footerPhoto = {
  slug: "idrefjall-house",
  caption: "Shot on a Minolta 505si on a walk in Idrefjäll.",
};

export const frameLabel = (index: number) => `${String(index + 1).padStart(2, "0")}A`;

export const photoSrc = (slug: string) => `/photographs/${slug}.jpg`;
export const thumbSrc = (slug: string) => `/photographs/thumbs/${slug}.jpg`;

export const findPhotograph = (slug: string | undefined) => {
  const index = photographs.findIndex((photo) => photo.slug === slug);
  return index === -1 ? null : { photo: photographs[index], index };
};

export const photoMeta = (photo: Photograph) =>
  [photo.place, photo.date, photo.film, photo.camera].filter(Boolean).join(" · ");
