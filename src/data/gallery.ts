// // Different image heights (h=800 vs h=420) create the natural masonry variation.
// // Replace with your Cloudinary URLs:
// //   https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_600,h_800,c_fill/photo.jpg

// export interface GalleryItem {
//   id: number;
//   src: string;
//   alt: string;
//   category: string;
// }

// export const gallery: GalleryItem[] = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=800&q=80",
//     alt: "Modern home exterior",
//     category: "Residential",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=420&q=80",
//     alt: "Contemporary kitchen design",
//     category: "Interiors",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&h=400&q=80",
//     alt: "Modern commercial building",
//     category: "Commercial",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=750&q=80",
//     alt: "Minimalist living room",
//     category: "Interiors",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&h=380&q=80",
//     alt: "Contemporary architectural facade",
//     category: "Commercial",
//   },
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=600&h=460&q=80",
//     alt: "Luxury bathroom renovation",
//     category: "Remodeling",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=700&q=80",
//     alt: "Interior paint finish",
//     category: "Finishes",
//   },
//   {
//     id: 8,
//     src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400&q=80",
//     alt: "Modern corporate office",
//     category: "Commercial",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=600&h=460&q=80",
//     alt: "Designer bedroom suite",
//     category: "Interiors",
//   },
// ];

// src/data/gallery.ts
// Replace with your real Cloudinary URLs:
// https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_600,h_800,c_fill/photo.jpg

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "Drywall" | "Painting" | "Flooring" | "Carpentry" | "Renovations";
}

export const gallery: GalleryItem[] = [
  // Drywall
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Drywall installation in progress",
    category: "Drywall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&h=420&q=80",
    alt: "Smooth drywall finish ready for paint",
    category: "Drywall",
  },
  // Painting
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=700&q=80",
    alt: "Interior painting — living room accent wall",
    category: "Painting",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&h=420&q=80",
    alt: "Exterior house painting project",
    category: "Painting",
  },
  // Flooring
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Hardwood flooring installation",
    category: "Flooring",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=600&h=460&q=80",
    alt: "Large-format tile flooring",
    category: "Flooring",
  },
  // Carpentry
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&h=750&q=80",
    alt: "Custom built-in shelving unit",
    category: "Carpentry",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&h=420&q=80",
    alt: "Crown molding and trim detail",
    category: "Carpentry",
  },
  // Renovations
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=600&h=800&q=80",
    alt: "Full bathroom renovation",
    category: "Renovations",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&h=460&q=80",
    alt: "Kitchen renovation — before and after",
    category: "Renovations",
  },
];