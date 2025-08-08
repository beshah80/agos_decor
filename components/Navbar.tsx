"use client";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--sara-cream)]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-[var(--sara-red)]"
            >
              Sara Decor
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--sara-gray)] hover:text-[var(--sara-red)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[var(--sara-gray)]">
              <Phone className="h-4 w-4" />
              <span>+251 911 123 456</span>
            </div>
            <Link href="/book-now" className="sara-btn-primary">
              Book Now
            </Link>
          </div>
          <button
            className="md:hidden text-[var(--sara-gray)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-[var(--sara-gray)] hover:text-[var(--sara-red)]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 flex items-center space-x-2 text-[var(--sara-gray)]">
              <Phone className="h-4 w-4" />
              <span>+251 911 123 456</span>
            </div>
            <div className="px-4 py-2">
              <Link
                href="/book-now"
                className="sara-btn-primary w-full block text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
