"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Framer Motion variants for animations
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

const contactItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// A mock ContactForm component to make this code runnable as a single file.
// This would typically be its own separate component file.
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl font-semibold text-[var(--sara-red)]"
        >
          እናመሰግናለን! መልዕክትዎ ተልኳል።
        </motion.div>
      ) : (
        <>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              ስም
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              ኢሜይል
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              መልዕክት
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)]"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full sara-btn-primary flex justify-center items-center ${
              isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>በመላክ ላይ...</span>
              </div>
            ) : (
              "መልዕክት ይላኩ"
            )}
          </button>
        </>
      )}
    </motion.form>
  );
};

export default function Contact() {
  // Client-side effect to apply smooth scrolling
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <div className="py-20 bg-[var(--sara-cream)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--sara-gray-dark)] mb-6">
            አግኝተን ያነጋግሩን
          </h1>
          <p className="text-lg text-[var(--sara-gray)] max-w-2xl mx-auto">
            የተለየ ዝግጅትዎን አብረን እናቅድ።
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--sara-gray-dark)]">
              ያነጋግሩን
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="h-5 w-5" />,
                  title: "+251 911 123 456",
                  subtitle: "ይደውሉ ወይም ዋትስአፕ ላይ ያውሩ",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  title: "info@agosdecor.com",
                  subtitle: "24/7 ድጋፍ",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "ቦሌ, አዲስ አበባ",
                  subtitle: "ኢትዮጵያ",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md border border-gray-200"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <div className="p-2 rounded-full bg-[var(--sara-red)]/10 text-[var(--sara-red)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-[var(--sara-gray-dark)]">
                      {item.title}
                    </p>
                    <p className="text-[var(--sara-gray)] text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--sara-gray-dark)]">
              መልዕክት ይላኩልን
            </h2>
            <ContactForm />
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[var(--sara-gray-dark)]">
            በፍጥነት ማውራት ይፈልጋሉ?
          </h2>
          <Link href="/book-now" className="sara-btn-primary">
            አሁኑኑ ያስይዙን
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
