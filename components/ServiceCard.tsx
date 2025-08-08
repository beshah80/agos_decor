import Image from "next/image";
import Link from "next/link";
import { Service } from "../types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg sara-shadow-card overflow-hidden">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={`${service.title} decoration setup`}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-[var(--sara-gray)] mb-4">{service.description}</p>
        <Link
          href={`/book-now?type=${service.id}`}
          className="sara-btn-primary w-full text-center block"
        >
          Book Us Now
        </Link>
      </div>
    </div>
  );
}
