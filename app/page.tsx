"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Service, Testimonial } from "../types";
// We only need 'motion' and 'Variants' for the animation. 'AnimatePresence' is not used.
import { motion, Variants } from "framer-motion";
import { Diamond } from "lucide-react";
import { useEffect } from "react";

const services: Service[] = [
  {
    id: "wedding",
    title: "Wedding Decorations",
    description:
      "Create the perfect ambiance for your special day with elegant floral arrangements.",
    image: "/images/services/wedding_img.png",
  },
  {
    id: "birthday",
    title: "Birthday Celebrations",
    description:
      "From intimate gatherings to grand parties, we bring joy and color.",
    image: "/images/services/birthday_img.png",
  },
  {
    id: "baby-shower",
    title: "Baby Showers",
    description: "Celebrate new beginnings with soft, beautiful decorations.",
    image: "/images/services/baby_shower.png",
  },
  {
    id: "engagement",
    title: "Engagement Parties",
    description: "Mark this milestone with romantic decorations.",
    image: "/images/services/engagement_party.png",
  },
  {
    id: "graduation",
    title: "Graduation Events",
    description: "Honor achievements with proud, celebratory decorations.",
    image: "/images/services/graduation_img.png",
  },
  {
    id: "traditional",
    title: "Traditional Ceremonies",
    description: "Honor Ethiopian traditions with authentic decorations.",
    image: "/images/services/traditional_ceremonies.png",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amina Kedir",
    event: "Baby Shower",
    rating: 5,
    text: "Sara Decor made my baby shower absolutely magical!",
    image: "/images/testimonial/amina_kedir.jpg",
  },
  {
    id: 2,
    name: "Dawit Tesfaye",
    event: "Wedding",
    rating: 5,
    text: "Our wedding decoration was stunning!",
    image: "/images/testimonial/dawit_tesfaye.jpg",
  },
  {
    id: 3,
    name: "Hiwot Mengistu",
    event: "Engagement Party",
    rating: 5,
    text: "Best decision for our engagement party.",
    image: "/images/testimonial/hiwot_mengistu.jpg",
  },
];

export default function Home() {
  // This constant needs to be defined within the component's scope.
  // We've moved it to the top of the Home function to be clear about its scope.
  const tiktokVideos = [
    {
      videoId: "7512852683330456837",
      ariaLabel: "Sara Decor baby shower welcoming surprise",
    },
    {
      videoId: "7536220416419859718",
      ariaLabel: "Sara Decor event decor in Addis Ababa",
    },
    {
      videoId: "7534737428012158213",
      ariaLabel: "Sara Decor baby event decoration package",
    },
    {
      videoId: "7532140408336403768",
      ariaLabel: "Sara Decor elegant baby shower decor",
    },
    {
      videoId: "7528429516906138886",
      ariaLabel: "Sara Decor baby shower package showcase",
    },
    {
      videoId: "7527689521723411768",
      ariaLabel: "Sara Decor vibrant baby shower decor in Ethiopia",
    },
    {
      videoId: "7526945384472513797",
      ariaLabel: "Sara Decor beautiful welcoming decor",
    },
    {
      videoId: "7525832991529127173",
      ariaLabel: "Sara Decor creative baby shower setup in Addis Ababa",
    },
    {
      videoId: "7523232953938267397",
      ariaLabel: "Sara Decor stunning baby shower with welcoming theme",
    },
  ];

  // A client component is required for Framer Motion, and this hook
  // ensures the scroll-smooth class is applied to the root element.
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  // Framer Motion variants for animations
  // Explicitly defining the type as `Variants` to resolve the TypeScript error.
  const heroVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  // Explicitly defining the type as `Variants` to resolve the TypeScript error.
  const textVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  // Explicitly defining the type as `Variants` to resolve the TypeScript error.
  const buttonVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  // Explicitly defining the type as `Variants` to resolve the TypeScript error.
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15, // Animate children with a slight delay
      },
    },
  };

  // Explicitly defining the type as `Variants` to resolve the TypeScript error.
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Explicitly defining the type as `Variants` to resolve the TypeScript error.
  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/background/an_elegant_wedding_image_.jpeg"
            alt="Elegant wedding decoration"
            fill={true}
            style={{ objectFit: "cover" }}
            className="opacity-20 blur-sm"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-[var(--sara-cream)]/90 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={textVariants}
          >
            Elegant. Memorable.{" "}
            <span className="text-[var(--sara-red)]">Timeless.</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Transform your event with Sara Decor’s signature style. Weddings,
            birthdays, showers — made magical.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link
                href="/services"
                className="sara-btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-[var(--sara-red)]"
              >
                Our Services
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link
                href="/book-now"
                className="sara-btn-secondary focus:outline-2 focus:outline-offset-2 focus:outline-[var(--sara-red)]"
              >
                Book Us Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Our <span className="text-[var(--sara-red)]">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we create memorable
            experiences.
          </p>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="sara-btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-[var(--sara-red)]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 bg-[var(--sara-cream)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            What Our <span className="text-[var(--sara-red)]">Clients Say</span>
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Why Choose{" "}
            <span className="text-[var(--sara-red)]">Sara Decor</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            We’re storytellers who bring emotion and elegance to every event
            setup.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personalized Designs",
                description: "Custom decorations to match your vision.",
              },
              {
                title: "Stress-Free Planning",
                description: "We handle every detail so you can enjoy.",
              },
              {
                title: "Detail Perfection",
                description: "Every element is carefully chosen.",
              },
              {
                title: "Satisfaction Guaranteed",
                description: "Your happiness is our priority.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={featureVariants}
                custom={i}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--sara-red)]/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[var(--sara-red)] rounded-full flex items-center justify-center">
                    {/* Replaced star with a more elegant diamond icon */}
                    <Diamond className="text-white w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--sara-gray)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video Showcase */}
      <motion.section
        className="py-20 bg-[var(--sara-cream)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            See Our <span className="text-[var(--sara-red)]">Magic</span> in
            Action
          </h2>
          <p className="text-base sm:text-lg text-[var(--sara-gray)] mb-16 max-w-2xl mx-auto leading-relaxed">
            Explore our stunning event setups through these showcase videos.
          </p>
          <div className="text-center mb-12">
            <Link
              href="#videos"
              className="sara-btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-[var(--sara-red)]"
            >
              Watch Now
            </Link>
          </div>
          <div
            id="videos"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tiktokVideos.map((video, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg sara-shadow-card overflow-hidden mx-auto"
                aria-label={video.ariaLabel}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${video.videoId}`}
                  className="w-full h-[400px] md:h-[450px] lg:h-[500px] aspect-[9/16]"
                  allowFullScreen
                  // The `scrolling` attribute is deprecated. Removing it as the parent div handles overflow.
                  allow="encrypted-media;"
                  loading="lazy"
                  title={video.ariaLabel}
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something{" "}
            <span className="text-[var(--sara-red)]">Beautiful</span>?
          </h2>
          <p className="text-base sm:text-lg text-[var(--sara-gray)] mb-8 leading-relaxed">
            Contact us today for a personalized consultation.
          </p>
          <Link
            href="/book-now"
            className="sara-btn-primary focus:outline-2 focus:outline-offset-2 focus:outline-[var(--sara-red)]"
          >
            Book Us Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
