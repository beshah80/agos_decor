"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GalleryImage } from "../../types";

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/image1.png",
    category: "wedding",
    alt: "Wedding decor with floral arch",
  },
  {
    id: 2,
    src: "/images/gallery/image2.png",
    category: "wedding",
    alt: "Wedding ceremony setup",
  },
  {
    id: 3,
    src: "/images/gallery/image3.png",
    category: "birthday",
    alt: "Birthday party decor",
  },
  {
    id: 4,
    src: "/images/gallery/image4.png",
    category: "birthday",
    alt: "Colorful birthday setup",
  },
  {
    id: 5,
    src: "/images/gallery/image5.png",
    category: "baby-shower",
    alt: "Baby shower decor",
  },
  {
    id: 6,
    src: "/images/gallery/image6.png",
    category: "baby-shower",
    alt: "Pastel baby shower setup",
  },
  {
    id: 7,
    src: "/images/gallery/image7.png",
    category: "graduation",
    alt: "Graduation decor",
  },
  {
    id: 8,
    src: "/images/gallery/image8.png",
    category: "graduation",
    alt: "Graduation ceremony setup",
  },
  {
    id: 9,
    src: "/images/gallery/image9.png",
    category: "traditional",
    alt: "Traditional Ethiopian coffee ceremony",
  },
  {
    id: 10,
    src: "/images/gallery/image10.png",
    category: "traditional",
    alt: "Ethiopian cultural decor",
  },
  {
    id: 11,
    src: "/images/gallery/image11.png",
    category: "engagement",
    alt: "Engagement party decor",
  },
  {
    id: 12,
    src: "/images/gallery/image12.png",
    category: "engagement",
    alt: "Romantic engagement setup",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [visibleImages, setVisibleImages] = useState<number>(8);

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our <span className="text-[var(--sara-red)]">Gallery</span>
        </h1>
        <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
          A visual journey through our favorite moments. Weddings, birthdays,
          baby showers, and more.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            "all",
            "wedding",
            "traditional",
            "birthday",
            "baby-shower",
            "graduation",
            "engagement",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md ${
                filter === category
                  ? "bg-[var(--sara-red)] text-white"
                  : "bg-white text-[var(--sara-gray)] hover:bg-[var(--sara-red)] hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.slice(0, visibleImages).map((image) => (
            <div
              key={image.id}
              className="relative sara-shadow-card rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        {visibleImages < filteredImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleImages(visibleImages + 4)}
              className="sara-btn-primary"
            >
              Load More
            </button>
          </div>
        )}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">See something you love?</h2>
          <Link href="/book-now" className="sara-btn-primary">
            Book Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
