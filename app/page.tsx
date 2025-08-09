"use client";

import { motion, Variants } from "framer-motion";
import { Diamond } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { Service, Testimonial } from "../types";

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
    text: "Agos Decor made my baby shower absolutely magical!",
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
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  const heroVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden px-4"
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
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--sara-cream)]/95 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            variants={textVariants}
          >
            Elegant. Memorable.{" "}
            <span className="text-[var(--sara-red)]">Timeless.</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[var(--sara-gray)] mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Transform your event with Agos Decor’s signature style. Weddings,
            birthdays, showers — made magical.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="w-full sm:w-auto"
            >
              <Link
                href="/services"
                className="sara-btn-primary w-full focus:outline-2 focus:outline-offset-2 focus:outline-[var(--sara-red)] py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[var(--sara-red)]/90"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="py-20 sm:py-24 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">
            Our <span className="text-[var(--sara-red)]">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we create memorable
            experiences.
          </p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/services"
              className="sara-btn-primary py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[var(--sara-red)]/90"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 sm:py-24 bg-[var(--sara-cream)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">
            What Our <span className="text-[var(--sara-red)]">Clients Say</span>
          </h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
        className="py-20 sm:py-24 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 tracking-wide">
            Why Choose{" "}
            <span className="text-[var(--sara-red)]">Agos Decor</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            We’re storytellers who bring emotion and elegance to every event
            setup.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                className="text-center p-6 bg-[var(--sara-cream)]/50 rounded-lg shadow-sm"
                variants={featureVariants}
                custom={i}
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 bg-[var(--sara-red)]/20 rounded-full flex items-center justify-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[var(--sara-red)] rounded-full flex items-center justify-center">
                    <Diamond className="text-white w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--sara-gray)] text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video Showcase - Single TikTok link */}
      <motion.section
        className="py-20 sm:py-24 bg-[var(--sara-cream)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            See Our <span className="text-[var(--sara-red)]">Magic</span> in
            Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            Discover our stunning event setups on our TikTok page.
          </p>
          <div className="text-center">
            <a
              href="https://www.tiktok.com/@agos_postpartumcare"
              target="_blank"
              rel="noopener noreferrer"
              className="sara-btn-primary py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[var(--sara-red)]/90"
            >
              Discover Our Work
            </a>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 sm:py-24 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            Ready to Create Something{" "}
            <span className="text-[var(--sara-red)]">Beautiful</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] mb-8 leading-relaxed">
            Contact us today for a personalized consultation.
          </p>
          <Link
            href="/book-now"
            className="sara-btn-primary py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[var(--sara-red)]/90"
          >
            Book Us Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
