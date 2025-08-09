import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // Import TikTok from a different library

export function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Book Now", href: "/book-now" },
  ];
  const services = [
    { name: "Wedding Decorations", href: "/services" },
    { name: "Birthday Parties", href: "/services" },
    { name: "Baby Showers", href: "/services" },
    { name: "Engagement Events", href: "/services" },
    { name: "Traditional Ceremonies", href: "/services" },
  ];

  return (
    <footer className="bg-[var(--sara-black)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[var(--sara-gold)] mb-4">
              Agos Decor
            </h3>
            <p className="text-gray-300 mb-6">
              Transforming events into magical experiences in Addis Ababa,
              Ethiopia.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  href: "https://facebook.com/yourpage",
                  ariaLabel: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/yourprofile",
                  ariaLabel: "Instagram",
                },
                {
                  icon: FaTiktok,
                  href: "https://tiktok.com/@youraccount",
                  ariaLabel: "TikTok",
                }, // Changed here
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-[var(--sara-red)] rounded-full flex items-center justify-center hover:bg-[var(--sara-red-dark)]"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--sara-gold)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--sara-gold)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--sara-gold)] mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[var(--sara-gold)]"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--sara-gold)] mb-4">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[var(--sara-red)] mt-1" />
                <div>
                  <p className="text-gray-300">+251 911 123 456</p>
                  <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[var(--sara-red)] mt-1" />
                <div>
                  <p className="text-gray-300">info@agosdecor.com</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--sara-red)] mt-1" />
                <div>
                  <p className="text-gray-300">Bole, Addis Ababa</p>
                  <p className="text-gray-400 text-sm">Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Agos Decor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
