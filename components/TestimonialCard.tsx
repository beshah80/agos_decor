import { Star } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg sara-shadow-card">
      <div className="flex space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 text-[var(--sara-gold)] fill-current"
          />
        ))}
      </div>
      <blockquote className="text-[var(--sara-gray)] mb-6">
        &quot;{testimonial.text}&quot;
      </blockquote>
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial.image}
          alt={`${testimonial.name} profile`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-[var(--sara-gray)]">
            {testimonial.event}
          </div>
        </div>
      </div>
    </div>
  );
}
