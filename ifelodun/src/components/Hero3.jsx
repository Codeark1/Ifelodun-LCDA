"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cabinet } from "../data/cabinet";

const Hero3 = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 text-center font-sans">
      {/* Hero Section Heading */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-600">Meet Our Team</h2>
        <p className="text-green-00 text-base md:text-lg mt-3 max-w-2xl mx-auto">
          A group of passionate professionals driven by excellence, creativity, 
          and a commitment to delivering the best.
        </p>
      </motion.div>

      {/* Team Categories */}
      {cabinet.slice(0, 3).map((category, categoryIndex) => (
        <motion.div 
          key={categoryIndex} 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.3 }}
        >
          <h1 className="text-2xl font-semibold mb-8 text-green-600">{category.category}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {category.members.slice(0, 3).map((member, memberIndex) => (
              <motion.div
                key={memberIndex}
                className="flex flex-col items-center p-6 rounded-xl transition-shadow w-full max-w-[350px] mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl transition-all duration-300 hover:grayscale"
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h2>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* "See More" Button */}
          <motion.div 
            className="mt-6"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              href={`/teams/${category.category.toLowerCase().replace(/\s+/g, "-")}`} 
              className="inline-block bg-green-600 font-sans text-white text-sm md:text-base font-medium px-6 py-2 rounded-md transition-transform"
            >
              See More
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Hero3;
