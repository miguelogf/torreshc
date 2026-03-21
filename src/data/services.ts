// src/data/services.ts
// Replace Unsplash placeholders with your real images.
// Cloudinary: https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_800,h_480,c_fill/photo.jpg

export interface Service {
  id: number;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Drywall",
    description:
      "Professional drywall installation and finishing for new builds and renovations. Smooth, durable walls ready for any finish.",
    highlights: ["New construction", "Repairs & patching", "Texture matching"],
    image: "/images/service1.webp",
  },
  {
    id: 2,
    title: "Painting",
    description:
      "Interior and exterior painting with premium materials. Clean lines, lasting color, and a finish that makes every room feel brand new.",
    highlights: ["Interior & exterior", "Custom color matching", "Prep & priming included"],
    image: "/images/service2.webp",
  },
  {
    id: 3,
    title: "Flooring",
    description:
      "Hardwood, LVP, tile, and more — installed with precision. We handle subfloor prep through final polish so every step feels right.",
    highlights: ["Hardwood & LVP", "Tile & stone", "Subfloor preparation"],
    image: "/images/service3.webp",
  },
  {
    id: 4,
    title: "Carpentry",
    description:
      "Custom trim, built-ins, cabinetry, and structural framing. Expert craftsmanship that adds detail, function, and character to any space.",
    highlights: ["Trim & molding", "Custom built-ins", "Structural framing"],
    image: "/images/service4.webp",
  },
  {
    id: 5,
    title: "Renovations",
    description:
      "Full-scope home and commercial renovations managed from start to finish. One team, one point of contact, zero headaches.",
    highlights: ["Kitchen & bath remodels", "Whole-home renovation", "Commercial fit-outs"],
    image: "/images/service5.webp",
  },
];