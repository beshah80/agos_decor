import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { BookingForm } from "../../components/BookingForm";

export default function BookNow() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Event <span className="text-[var(--sara-red)]">Booking</span>
        </h1>
        <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
          Ready to bring your vision to life? Fill out the form below.
        </p>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg sara-shadow-card">
          <Suspense
            fallback={
              <div className="text-center text-[var(--sara-gray)]">
                Loading booking form...
              </div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Info</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-[var(--sara-red)]" />
              <span>+251 911 123 456</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-[var(--sara-red)]" />
              <span>info@saradecor.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-[var(--sara-red)]" />
              <span>Bole, Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">Not sure where to start?</h2>
          <Link href="/contact" className="sara-btn-primary">
            Contact Us Instead
          </Link>
        </div>
      </div>
    </div>
  );
}
