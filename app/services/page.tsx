import Link from "next/link";
import { ServiceCard } from "../../components/ServiceCard";
import { Service } from "../../types";

const services: Service[] = [
  {
    id: "wedding",
    title: "Wedding Decorations",
    description:
      "Classic or modern — let us set the stage for your love story.",
    image: "/images/services/wedding_img.png",
  },
  {
    id: "birthday",
    title: "Birthday Parties",
    description:
      "From first birthdays to 50th milestones — bold, fun, and fabulous.",
    image: "/images/services/birthday_img.png",
  },
  {
    id: "baby-shower",
    title: "Baby Showers",
    description:
      "Soft pastels or vibrant themes for your little one on the way.",
    image: "/images/services/baby_shower.png",
  },
  {
    id: "engagement",
    title: "Engagement Parties",
    description: "Chic, romantic setups to celebrate love and friendship.",
    image: "/images/services/engagement_party.png",
  },
  {
    id: "graduation",
    title: "Graduation Events",
    description: "Celebrate academic milestones with themed, elegant decor.",
    image: "/images/services/graduation_img.png",
  },
  {
    id: "traditional",
    title: "Traditional Ceremonies",
    description: "Honor Ethiopian traditions with authentic decorations.",
    image: "/images/services/traditional_ceremonies.png",
  },
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our <span className="text-[var(--sara-red)]">Services</span>
        </h1>
        <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
          Whatever you’re celebrating, we bring it to life with color, charm,
          and class.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Not sure what suits your theme?
          </h2>
          <Link href="/book-now" className="sara-btn-primary">
            Book Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
