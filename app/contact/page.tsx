import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Contact <span className="text-[var(--sara-red)]">Sara Decor</span>
        </h1>
        <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
          Let’s start planning your perfect event.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[var(--sara-red)] mt-1" />
                <div>
                  <p className="font-semibold">+251 911 123 456</p>
                  <p className="text-[var(--sara-gray)] text-sm">
                    Call or WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[var(--sara-red)] mt-1" />
                <div>
                  <p className="font-semibold">info@saradecor.com</p>
                  <p className="text-[var(--sara-gray)] text-sm">
                    24/7 Support
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--sara-red)] mt-1" />
                <div>
                  <p className="font-semibold">Bole, Addis Ababa</p>
                  <p className="text-[var(--sara-gray)] text-sm">Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">Prefer a quick chat?</h2>
          <Link href="/book-now" className="sara-btn-primary">
            Book Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
