"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // In a real Next.js app, you'd use `const pathname = usePathname();`
  const activePath = "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  // Correctly typed Variants object
  const menuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--sara-cream)]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-[var(--sara-red)]"
            >
              Agos Decor
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`text-[var(--sara-gray)] font-medium hover:text-[var(--sara-red)] transition-colors duration-200 py-6
                  ${activePath === item.href ? "text-[var(--sara-red)]" : ""}`}
                >
                  {item.name}
                </Link>
                {activePath === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--sara-red)] rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[var(--sara-gray)]">
              <Phone className="h-4 w-4 text-[var(--sara-red)]" />
              <span className="font-medium">+251 911 123 456</span>
            </div>
          </div>
          <button
            className="md:hidden text-[var(--sara-gray)]"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-sm fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col p-4 space-y-2"
              variants={menuVariants}
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={linkVariants}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[var(--sara-gray)] text-lg font-medium hover:bg-gray-100 rounded-md transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="p-4 border-t border-gray-200 flex flex-col items-center">
              <div className="flex items-center space-x-2 text-[var(--sara-gray)] mb-4">
                <Phone className="h-5 w-5 text-[var(--sara-red)]" />
                <span className="font-medium text-lg">+251 911 123 456</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
