"use client";

import { motion, Variants } from "framer-motion";
import { Diamond } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// Assuming ServiceCard and TestimonialCard are components and Service/Testimonial are types defined elsewhere
// import { ServiceCard } from "../components/ServiceCard";
// import { TestimonialCard } from "../components/TestimonialCard";
// import { Service, Testimonial } from "../types";

// Placeholder for the types and components to make the code self-contained
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  event: string;
  rating: number;
  text: string;
  image: string;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
    <div className="relative h-48 w-full">
      <Image
        src={service.image}
        alt={service.title}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-[var(--sara-gray-dark)] mb-2">
        {service.title}
      </h3>
      <p className="text-[var(--sara-gray)]">{service.description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex items-center justify-center mb-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={80}
        height={80}
        className="rounded-full object-cover w-20 h-20"
      />
    </div>
    <div className="text-center">
      <p className="italic text-[var(--sara-gray)] mb-4">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex justify-center mb-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">
            ★
          </span>
        ))}
      </div>
      <h4 className="font-semibold text-lg text-[var(--sara-gray-dark)]">
        {testimonial.name}
      </h4>
      <p className="text-sm text-[var(--sara-gray)]">{testimonial.event}</p>
    </div>
  </div>
);

// የ services ውሂብ ወደ አማርኛ ተተርጉሟል
const services: Service[] = [
  {
    id: "wedding",
    title: "የሰርግ ዝግጅት",
    description: "ለሠርግዎ ቀን በአበባዎች ያሸበረቀ እና ውበት የተላበሰ ድባብ እንፈጥራለን።",
    image: "/images/services/wedding_img.png",
  },
  {
    id: "birthday",
    title: "የልደት በዓላት",
    description: "ከትንሽ ግብዣዎች እስከ ትልቅ ድግሶች ድረስ ደስታ እና ውበት እናመጣለን።",
    image: "/images/services/birthday_img.png",
  },
  {
    id: "baby-shower",
    title: "የቤቢ ሻወር",
    description: "አዲስ ጅማሬን ለስላሳ እና ውብ በሆኑ ዲኮሮች እናከብራለን።",
    image: "/images/services/baby_shower.png",
  },
  {
    id: "engagement",
    title: "የእጮኝነት ድግሶች",
    description: "ይህን ወሳኝ ምዕራፍ በሮማንቲክ ዝግጅቶች እናሳምራለን።",
    image: "/images/services/engagement_party.png",
  },
  {
    id: "graduation",
    title: "የምረቃ ዝግጅቶች",
    description: "ስኬቶችን በኩራት እና በድምቀት በተሞሉ ዝግጅቶች እናከብራለን።",
    image: "/images/services/graduation_img.png",
  },
  {
    id: "traditional",
    title: "ባህላዊ ሥነ-ሥርዓቶች",
    description: "የኢትዮጵያን ወግና ባህል ትክክለኛ በሆኑ ዝግጅቶች እናከብራለን።",
    image: "/images/services/traditional_ceremonies.png",
  },
];

// የ testimonials ውሂብ ወደ አማርኛ ተተርጉሟል
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "አሚና ከድር",
    event: "የቤቢ ሻወር",
    rating: 5,
    text: "አጎስ ዲኮር የቤቢ ሻወሬን በጣም አስደናቂ አደረገው!",
    image: "/images/testimonial/amina_kedir.jpg",
  },
  {
    id: 2,
    name: "ዳዊት ተስፋዬ",
    event: "ሰርግ",
    rating: 5,
    text: "የሰርጋችን ዲኮር እጅግ በጣም ያማረ ነበር!",
    image: "/images/testimonial/dawit_tesfaye.jpg",
  },
  {
    id: 3,
    name: "ሕይወት መንግስቱ",
    event: "የእጮኝነት ድግስ",
    rating: 5,
    text: "የእጮኝነት ድግሳችን ምርጥ ውሳኔ ነበር።",
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
            alt="ያማረ የሰርግ ዲኮር"
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
            ያማረ። የማይረሳ። <span className="text-[var(--sara-red)]">ዘመናዊ።</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[var(--sara-gray)] mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            ዝግጅቶችዎን በአጎስ ዲኮር ልዩ ስታይል ይለውጡ። ሠርግ፣ ልደት፣ ቤቢ ሻወር – አስደናቂ ይሁኑ።
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
                አገልግሎቶቻችንን ይመልከቱ
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
            የእኛ <span className="text-[var(--sara-red)]">አገልግሎቶች</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            ከቅርብ ግብዣዎች እስከ ትላልቅ በዓላት ድረስ የማይረሱ ተሞክሮዎችን እንፈጥራለን።
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
              ሁሉንም አገልግሎቶች ይመልከቱ
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
            ደንበኞቻችን <span className="text-[var(--sara-red)]">ምን አሉ</span>
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
            <span className="text-[var(--sara-red)]">አጎስ ዲኮርን</span> ለምን ይመርጣሉ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] text-center mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            ለእያንዳንዱ ዝግጅት ውበትን እና ስሜትን የምንጨምር ታሪክ ፈጣሪዎች ነን።
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "ለእርስዎ ብቻ የተዘጋጀ ዲዛይን",
                description: "ከሀሳብዎ ጋር የሚጣጣም ብጁ ዲኮር።",
              },
              {
                title: "ከጭንቀት የጸዳ ዝግጅት",
                description: "እርስዎ በዝግጅትዎ እንዲደሰቱ እኛ ሁሉንም ዝርዝሮች እናስተዳድራለን።",
              },
              {
                title: "ዝርዝር ላይ ትኩረት",
                description: "እያንዳንዱ ነገር በጥንቃቄ ተመርጧል።",
              },
              {
                title: "ሙሉ እርካታዎ ዋስትናችን ነው",
                description: "ደስታዎ ቀዳሚ ተግባራችን ነው።",
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
            የእኛን <span className="text-[var(--sara-red)]">አስማት</span> በስራ ላይ
            ይመልከቱ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            አስደናቂ የዝግጅት ዲዛይኖቻችንን በቲክቶክ ገጻችን ላይ ይመልከቱ።
          </p>
          <div className="text-center">
            <a
              href="https://www.tiktok.com/@agos_postpartumcare"
              target="_blank"
              rel="noopener noreferrer"
              className="sara-btn-primary py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[var(--sara-red)]/90"
            >
              ስራዎቻችንን ይመልከቱ
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
            ውብ የሆነ ነገር ለመፍጠር{" "}
            <span className="text-[var(--sara-red)]">ዝግጁ ነዎት</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sara-gray)] mb-8 leading-relaxed">
            ለግል ምክር አሁኑኑ ያግኙን።
          </p>
          <Link
            href="/book-now"
            className="sara-btn-primary py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[var(--sara-red)]/90"
          >
            አሁኑኑ ይዘዙ
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
