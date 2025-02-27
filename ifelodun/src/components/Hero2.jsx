"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { councilData } from "../data/councilData";
import { CheckCheckIcon } from "lucide-react";

const CouncilWelcome = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        
        {/* Left: Image Section */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center flex-col text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={councilData.imageSrc}
            alt={councilData.officialName}
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <p className="text-[#1c1c1c] font-sans font-medium text-lg mt-2">
            {councilData.officialName}
          </p>
          <p className="italic font-sans text-[#1c1c1c]">
            {councilData.officailPosition}
          </p>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div 
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold font-sans text-green-700">
            {councilData.title}
          </h1>
          <p className="text-[#1c1c1c] mt-2 font-sans leading-8">{councilData.description}</p>
          <p className="text-[#1c1c1c] mt-2 font-sans leading-8">{councilData.details}</p>

          {/* List of Initiatives */}
          <ul className="mt-4 space-y-2">
            {councilData.initiatives.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-center space-x-2 font-medium text-[#1c1c1c]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCheckIcon color="green" /> <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Read More Button */}
          <motion.button 
            className="mt-6 px-6 py-2 bg-green-900 text-white font-medium font-sans rounded-md hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {councilData.buttonText}
          </motion.button>
        </motion.div>
      </div>

      {/* Video Section */}
      <motion.div 
        className="w-full text-center mt-10 md:mt-16 pb-4 font-sans"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold font-sans text-green-700 mb-8">
          Ifelodun’s Growth Story
        </h2>

<div className=" grid grid-cols-2">
<div className="mt-4 flex justify-center">
          <motion.video
            className="w-full md:w-1/2 rounded-lg p-2 sm:p-1 shadow-md"
            controls
            preload="metadata" 
            playsInline 
            poster="/images/chairman.jpg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <source src="/images/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>

        <div className=" mt-4 flex justify-center">
        <motion.video
            className="w-full md:w-1/2 rounded-lg p-2 sm:p-1 shadow-md"
            controls
            preload="metadata" 
            playsInline 
            poster="/images/chairman2.jpg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <source src="/images/bg-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video> 
        </div>
</div>








        
      </motion.div>
    </div>
  );
};

export default CouncilWelcome;
