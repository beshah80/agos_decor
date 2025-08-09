"use client";

import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

// A mock BookingForm component to make this code runnable as a single file.
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Booking submitted with data:", formData);
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: "",
      });
    }, 2000);
  };

  // Framer motion variants for form fields
  const formItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl font-semibold text-[var(--sara-red)]"
        >
          Thank you for your booking request! We will be in touch shortly.
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
                required
              />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
                required
              />
            </motion.div>
          </div>
          <motion.div variants={formItemVariants}>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
              required
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="eventType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Type of Event
              </label>
              <div className="relative">
                <Briefcase className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="block w-full rounded-md border-2 border-gray-300 p-2 pl-10 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
                  required
                >
                  <option value="">Select</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="engagement">Engagement</option>
                  <option value="graduation">Graduation</option>
                  <option value="traditional">Traditional Ceremony</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </motion.div>
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Event Date
              </label>
              <div className="relative">
                <Calendar className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  name="eventDate"
                  id="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="block w-full rounded-md border-2 border-gray-300 p-2 pl-10 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
                  required
                />
              </div>
            </motion.div>
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="guestCount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Number of Guests
              </label>
              <div className="relative">
                <Users className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                  type="number"
                  name="guestCount"
                  id="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="block w-full rounded-md border-2 border-gray-300 p-2 pl-10 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
                  required
                />
              </div>
            </motion.div>
          </div>
          <motion.div variants={formItemVariants}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="E.g., specific themes, colors, or special requests..."
              className="block w-full rounded-md border-2 border-gray-300 p-2 shadow-sm focus:border-[var(--sara-red)] focus:ring-[var(--sara-red)] transition-colors duration-200"
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            className={`w-full sara-btn-primary flex justify-center items-center ${
              isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isLoading}
            variants={formItemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit Booking Request"
            )}
          </motion.button>
        </>
      )}
    </motion.form>
  );
};

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
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

export default function BookNow() {
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
            Event <span className="text-[var(--sara-red)]">Booking</span>
          </h1>
          <p className="text-lg text-[var(--sara-gray)] max-w-2xl mx-auto">
            Ready to bring your vision to life? Fill out the form below.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg sara-shadow-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Suspense
            fallback={
              <div className="text-center text-[var(--sara-gray)]">
                Loading booking form...
              </div>
            }
          >
            <BookingForm />
          </Suspense>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-[var(--sara-gray-dark)]">
            Contact Info
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center text-center">
            <motion.div
              className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white shadow-md border border-gray-200"
              variants={contactItemVariants}
              whileHover="hover"
            >
              <div className="p-2 rounded-full bg-[var(--sara-red)]/10 text-[var(--sara-red)]">
                <Phone className="h-5 w-5" />
              </div>
              <p className="font-semibold text-lg text-[var(--sara-gray-dark)]">
                +251 911 123 456
              </p>
              <p className="text-[var(--sara-gray)] text-sm">
                Call or WhatsApp
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white shadow-md border border-gray-200"
              variants={contactItemVariants}
              whileHover="hover"
            >
              <div className="p-2 rounded-full bg-[var(--sara-red)]/10 text-[var(--sara-red)]">
                <Mail className="h-5 w-5" />
              </div>
              <p className="font-semibold text-lg text-[var(--sara-gray-dark)]">
                info@saradecor.com
              </p>
              <p className="text-[var(--sara-gray)] text-sm">24/7 Support</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white shadow-md border border-gray-200"
              variants={contactItemVariants}
              whileHover="hover"
            >
              <div className="p-2 rounded-full bg-[var(--sara-red)]/10 text-[var(--sara-red)]">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="font-semibold text-lg text-[var(--sara-gray-dark)]">
                Bole, Addis Ababa
              </p>
              <p className="text-[var(--sara-gray)] text-sm">Ethiopia</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[var(--sara-gray-dark)]">
            Not sure where to start?
          </h2>
          <Link href="/contact" className="sara-btn-primary">
            Contact Us Instead
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
