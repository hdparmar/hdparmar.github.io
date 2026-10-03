// Everything a visitor reads on the landing page lives here, so copy changes
// never require touching components.

export const links = {
  email: "harshdeep.parmar@outlook.com",
  github: "https://github.com/hdparmar",
  linkedin: "https://www.linkedin.com/in/hdparmar",
  // Parked for now. Put the PDF in public/ and set this to "/Harshdeep_Parmar_CV.pdf" to show the CV link.
  cv: "",
};

export const place = {
  latitude: "59.33° N",
  timeZone: "Europe/Stockholm",
};

export const quote = {
  text: "To collect photographs is to collect the world.",
  author: "Susan Sontag",
  source: "On Photography",
};

export type Track = {
  id: string;
  title: string;
  year: string;
  body: string;
  href?: string;
};

export type Side = {
  key: "A" | "B";
  name: string;
  tracks: Track[];
};

// Two sides of the same coin. Keep both sides the same length.
export const sides: Side[] = [
  {
    key: "A",
    name: "Firmware",
    tracks: [
      {
        id: "A1",
        title: "Listening on 128 KB",
        year: "2022–23",
        body: "Audio inference on an STM32L476: DMA, CMSIS-DSP and a FastGRNN model in plain C.",
      },
      {
        id: "A2",
        title: "Spatial audio on embedded Linux",
        year: "2023–25",
        body: "A Buildroot platform for portable spatial-audio playback, at ORB.",
      },
      {
        id: "A3",
        title: "Light that listens",
        year: "2026",
        body: "ESP32 hub and satellite lights talking over ESP-NOW. Client work.",
      },
    ],
  },
  {
    key: "B",
    name: "Play and image",
    tracks: [
      {
        id: "B1",
        title: "Nadilo",
        year: "2025–",
        href: "https://tonestruments.se",
        body: "A game that teaches beat-making by ear, one sound at a time.",
      },
      {
        id: "B2",
        title: "Tradi-fusion",
        year: "2024",
        href: "https://github.com/hdparmar/Tradifusion",
        body: "Riffusion fine-tuned on Irish traditional music. My KTH thesis.",
      },
      {
        id: "B3",
        title: "Film and writing",
        year: "Ongoing",
        href: "/photographs",
        body: "Walks with a film camera, and the words that come after.",
      },
    ],
  },
];
