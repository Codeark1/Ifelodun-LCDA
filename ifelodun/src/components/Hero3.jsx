import Image from "next/image";
import Link from "next/link";
import { cabinet } from "../data/cabinet";

const Hero3 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 text-center font-sans">
      {/* Hero Section Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet Our Team</h2>
        <p className="text-gray-600 text-base md:text-lg mt-3 max-w-2xl mx-auto">
          A group of passionate professionals driven by excellence, creativity, 
          and a commitment to delivering the best.
        </p>
      </div>

      {/* Team Categories */}
      {cabinet.slice(0, 3).map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h1 className="text-2xl font-semibold mb-8 text-gray-800">{category.category}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {category.members.slice(0, 3).map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="flex flex-col items-center p-6 rounded-xl 
                transition-shadow w-full max-w-[350px] mx-auto"
              >
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h2>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>

          {/* "See More" Button */}
          <div className="mt-6">
          <Link 
  href={`/teams/${category.category.toLowerCase().replace(/\s+/g, "-")}`} 
  className="inline-block bg-green-600 font-sans text-white text-sm md:text-base font-medium  px-6 py-2 rounded-md transition-transform"
>
  See More
</Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero3;
