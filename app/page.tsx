import Image from "next/image";
import Link from "next/link";
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
    text: "Sara Decor made my baby shower absolutely magical!",
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
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/background/an_elegant_wedding_image_.jpeg"
            alt="Elegant wedding decoration"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--sara-cream)]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elegant. Memorable.{" "}
            <span className="text-[var(--sara-red)]">Timeless.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--sara-gray)] mb-8 max-w-2xl mx-auto">
            Transform your event with Sara Decor’s signature style. Weddings,
            birthdays, showers — made magical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="sara-btn-primary">
              Our Services
            </Link>
            <Link href="/book-now" className="sara-btn-secondary">
              Book Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our <span className="text-[var(--sara-red)]">Services</span>
          </h2>
          <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we create memorable
            experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="sara-btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--sara-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            What Our <span className="text-[var(--sara-red)]">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Why Choose{" "}
            <span className="text-[var(--sara-red)]">Sara Decor</span>
          </h2>
          <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
            We’re storytellers who bring emotion and elegance to every event
            setup.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--sara-red)]/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[var(--sara-red)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--sara-gray)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-[var(--sara-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Our <span className="text-[var(--sara-red)]">Magic</span> in
            Action
          </h2>
          <p className="text-lg text-[var(--sara-gray)] mb-12 max-w-2xl mx-auto">
            Explore our stunning event setups through these showcase videos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor main showcase video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor wedding decoration video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor birthday party video",
              },
              {
                src: "/videos/baby_shower.mp4",
                ariaLabel: "Sara Decor baby shower video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor engagement party video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor graduation event video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor traditional ceremony video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor wedding highlight video",
              },
              {
                src: "/videos/show_case.mp4",
                ariaLabel: "Sara Decor celebration moment video",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="relative rounded-lg sara-shadow-card overflow-hidden"
              >
                <video
                  src={video.src}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto"
                  aria-label={video.ariaLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something{" "}
            <span className="text-[var(--sara-red)]">Beautiful</span>?
          </h2>
          <p className="text-lg text-[var(--sara-gray)] mb-8">
            Contact us today for a personalized consultation.
          </p>
          <Link href="/book-now" className="sara-btn-primary">
            Book Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
