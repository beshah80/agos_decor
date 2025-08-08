import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function About() {
  const team: TeamMember[] = [
    {
      name: "Sara Mekdes",
      title: "Founder & Creative Director",
      description:
        "Visionary designer with a passion for aesthetics and storytelling.",
      image: "/images/about/sara_mekdes.jpg",
    },
    {
      name: "Dagmawi Elias",
      title: "Event Coordinator",
      description:
        "Master of planning logistics and timelines for stress-free experiences.",
      image: "/images/about/dagmawi_elias.jpg",
    },
    {
      name: "Blen Abera",
      title: "Styling Assistant",
      description:
        "Detail-focused artist with a flair for floral and table styling.",
      image: "/images/about/blen_abera.jpg",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-[var(--sara-red)]">Story</span>
          </h1>
          <p className="text-lg text-[var(--sara-gray)] max-w-2xl mx-auto">
            At Sara Decor, every event is a canvas. Founded with passion and
            creativity, we’ve spent years perfecting the art of modern,
            luxurious, and culturally inspired decor.
          </p>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg sara-shadow-card p-6 text-center"
              >
                <Image
                  src={member.image}
                  alt={`${member.name} profile`}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[var(--sara-gray)] mb-3">{member.title}</p>
                <p className="text-[var(--sara-gray)]">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Personalized Designs",
              "Transparent Process",
              "Timely Execution",
              "Budget-Friendly Packages",
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--sara-red)]/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-[var(--sara-red)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/book-now" className="sara-btn-primary">
              Book Us Now
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Make Your Event{" "}
            <span className="text-[var(--sara-red)]">Unforgettable</span>
          </h2>
          <Link href="/book-now" className="sara-btn-primary">
            Book Us Now
          </Link>
        </section>
      </div>
    </div>
  );
}
