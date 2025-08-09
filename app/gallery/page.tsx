"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GalleryImage } from "../../types";
// Import motion and Variants for animations
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowUpCircle, RefreshCw } from "lucide-react";

// The data for the gallery images.
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

// Framer Motion variants for the image grid and individual items
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animate children one by one
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.2,
    },
  },
};

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [visibleImages, setVisibleImages] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  // Filter the images based on the selected category
  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  // Reset visible images and filter when a new category is selected
  const handleFilterChange = (category: string) => {
    setFilter(category);
    setVisibleImages(8);
  };

  // Handle the "Load More" button click
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a network delay for better UX
    setTimeout(() => {
      setVisibleImages((prev) => prev + 4);
      setIsLoading(false);
    }, 1000);
  };

  // Handle the "Go to Top" button click
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show "Go to Top" button after user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--sara-gray-dark)]">
          Our <span className="text-[var(--sara-red)]">Gallery</span>
        </h1>
        <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
          A visual journey through our favorite moments. Weddings, birthdays,
          baby showers, and more.
        </p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            "all",
            "wedding",
            "traditional",
            "birthday",
            "baby-shower",
            "graduation",
            "engagement",
          ].map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`
                px-6 py-2 rounded-full text-base font-medium transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--sara-red)]
                ${
                  filter === category
                    ? "bg-[var(--sara-red)] text-white"
                    : "bg-white text-[var(--sara-gray)] hover:bg-[var(--sara-red)]/20 hover:text-[var(--sara-red)]"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1).replace("-", " ")}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredImages.slice(0, visibleImages).map((image) => (
              <motion.div
                key={image.id}
                className="relative rounded-lg overflow-hidden cursor-pointer sara-shadow-card"
                variants={itemVariants}
                whileHover="hover"
                exit={{ opacity: 0, scale: 0.8 }}
                layout
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleImages < filteredImages.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handleLoadMore}
              className={`sara-btn-primary transition-all duration-300 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                "Load More"
              )}
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[var(--sara-gray-dark)]">
            See something you love?
          </h2>
          <Link href="/book-now" className="sara-btn-primary">
            Book Us Now
          </Link>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              onClick={handleScrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[var(--sara-red)] text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--sara-red)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpCircle className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
