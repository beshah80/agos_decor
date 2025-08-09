"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaDollarSign,
  FaHandsHelping,
  FaPaintBrush,
} from "react-icons/fa";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const team: TeamMember[] = [
    {
      name: "ሳራ",
      title: "መስራችና የፈጠራ ዳይሬክተር",
      description: "ለዉበትና ለታሪክ ፍቅር ያለው ራዕይ ያለው ዲዛይነር።",
      image: "/images/about/sara_mekdes.jpg",
    },
    {
      name: "ዳግማዊ",
      title: "የዝግጅት አስተባባሪ",
      description: "ጭንቀት የሌለባቸው ልምዶችን ለማቀድ የሎጂስቲክስ እና የጊዜ ሰሌዳ ባለሙያ።",
      image: "/images/about/dagmawi_elias.jpg",
    },
    {
      name: "ብሌን",
      title: "የማስጌጥ ረዳት",
      description: "ለዝርዝር ጉዳዮች ትኩረት የሚሰጥ የአበቦችን እና የጠረጴዛዎችን ማስጌጥ የሚያውቅ አርቲስት።",
      image: "/images/about/blen_abera.jpg",
    },
  ];

  const features = [
    { name: "የግል ዲዛይን", icon: FaPaintBrush },
    { name: "ግልጽ የስራ ሂደት", icon: FaHandsHelping },
    { name: "ወቅታዊ አፈጻጸም", icon: FaCalendarCheck },
    { name: "የበጀት ተስማሚ ጥቅሎች", icon: FaDollarSign },
  ];

  // Animation variants with reduced motion support
  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const scaleHover = shouldReduceMotion
    ? {}
    : { scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" };

  const iconAnimation = shouldReduceMotion ? {} : { scale: 1, rotate: 0 };

  return (
    <div className="py-24 bg-gradient-to-b from-white via-[#fff8f0] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <motion.section
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 relative inline-block group"
            aria-label="Our Story"
          >
            ታሪካችን
            <span className="block absolute bottom-0 left-0 h-1 bg-[var(--sara-red)] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--sara-gray)] max-w-3xl mx-auto leading-relaxed font-light">
            በአጎስ ዲኮር፣ እያንዳንዱ ዝግጅት ሸራ ነው። በፍቅር እና በፈጠራ የተመሰረተን ሲሆን፣ ለዘመናዊ፣ ለቅንጦት
            እና ለባህላዊ ዲኮር ጥበብን በማሟላት አመታትን አሳልፈናል።
          </p>
        </motion.section>

        {/* Team */}
        <section className="mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center mb-16"
            initial="initial"
            animate="animate"
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ቡድናችንን ይተዋወቁ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="relative bg-white rounded-xl sara-shadow-card p-8 text-center cursor-pointer overflow-hidden transform-gpu will-change-transform"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={scaleHover}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                aria-label={`${member.name}, ${member.title}`}
                tabIndex={0}
              >
                <div className="relative z-10">
                  <Image
                    src={member.image}
                    alt={`${member.name} profile`}
                    width={180}
                    height={180}
                    className="rounded-full mx-auto mb-6 border-4 border-[var(--sara-red)] transform transition-transform duration-300"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[var(--sara-gray)] mb-4 italic">
                    {member.title}
                  </p>
                  <p className="text-[var(--sara-gray)] text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center mb-16"
            initial="initial"
            animate="animate"
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            የሚለየን ምንድን ነው?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl sara-shadow-card p-6 text-center transform-gpu will-change-transform cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                aria-label={item.name}
                tabIndex={0}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--sara-red)]/10 rounded-full flex items-center justify-center relative">
                  <motion.div
                    className="w-12 h-12 bg-[var(--sara-red)] rounded-full flex items-center justify-center text-white text-2xl"
                    initial={{ scale: 0.8, rotate: -15 }}
                    animate={iconAnimation}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: i * 0.15,
                    }}
                    viewport={{ once: true }}
                    aria-hidden="true"
                  >
                    <item.icon />
                  </motion.div>
                  <div className="absolute inset-0 rounded-full bg-[var(--sara-red)] opacity-0 animate-pulse-light"></div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="text-center bg-[var(--sara-red)] p-12 rounded-2xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            ዝግጅትዎን የማይረሳ እናድርገው
            <span className="underline decoration-wavy decoration-white/50"></span>
          </h2>
          <Link
            href="/book-now"
            className="sara-btn-primary hover:scale-105 transition-transform duration-300 text-lg bg-white text-[var(--sara-red)] font-bold py-4 px-10 rounded-full inline-block mt-4"
            aria-label="Book us now"
          >
            አሁኑኑ ያስይዙን
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
