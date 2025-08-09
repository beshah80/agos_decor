import Link from "next/link";
import { ServiceCard } from "../../components/ServiceCard";
import { Service } from "../../types";

const services: Service[] = [
  {
    id: "wedding",
    title: "የሰርግ ዲኮር",
    description: "ክላሲክም ይሁን ዘመናዊ — ለፍቅር ታሪክዎ ውብ መድረክ እንፈጥራለን።",
    image: "/images/services/wedding_img.png",
  },
  {
    id: "birthday",
    title: "የልደት በዓል",
    description: "ከመጀመሪያ ልደት እስከ 50ኛ አመት — ደማቅ፣ አስደሳችና ልዩ ዲኮር።",
    image: "/images/services/birthday_img.png",
  },
  {
    id: "baby-shower",
    title: "የቤቢ ሻወር",
    description: "ለሚመጣው ትንሽዬ ልጃችሁ ለስላሳ ፓስቴል ወይም ደማቅ ጭብጦች።",
    image: "/images/services/baby_shower.png",
  },
  {
    id: "engagement",
    title: "የእጮኝነት ድግስ",
    description: "ፍቅርንና ወዳጅነትን ለማክበር የሚያምሩ፣ የሮማንቲክ ድባብ የሚፈጥሩ ዲዛይኖች።",
    image: "/images/services/engagement_party.png",
  },
  {
    id: "graduation",
    title: "የምረቃ ዝግጅት",
    description: "የትምህርት ስኬትን በልዩ፣ የሚያምር ዲኮር ያክብሩ።",
    image: "/images/services/graduation_img.png",
  },
  {
    id: "traditional",
    title: "ባህላዊ ስነስርዓቶች",
    description: "የሀገራችንን ባህላዊ እሴቶች ከሚያከብሩ ትክክለኛ ዲዛይኖች ጋር።",
    image: "/images/services/traditional_ceremonies.png",
  },
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          የምንሰጣቸው <span className="text-[var(--sara-red)]">አገልግሎቶች</span>
        </h1>
        <p className="text-lg text-[var(--sara-gray)] text-center mb-12 max-w-2xl mx-auto">
          ምንንም ቢያከብሩ፣ በቀለም፣ በውበትና በቅንጦት እናሳካዋለን።
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">ለዝግጅትዎ ምን እንደሚስማማ አላወቁም?</h2>
          <Link href="/book-now" className="sara-btn-primary">
            አሁኑኑ ያግኙን
          </Link>
        </div>
      </div>
    </div>
  );
}
