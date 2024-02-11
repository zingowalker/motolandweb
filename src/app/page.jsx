"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero4.png" fill alt="hero image"  className="h-90% max-w-full rounded-lg" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 ml-4 items-center justify-center">
          {/* TITLE */}
          <h1 className="bg-gradient-to-r from-rose-600 via-blue-500 to-red-400 inline-block text-transparent bg-clip-text text-3xl md:text-6xl font-bold">
            Explore Ladakh by Motorcycle with Us...
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Motoland Adventures is a local motorcycle and travel agency based in Leh,
            Ladakh. We specialise in personalised itineraries and custom-made
            tours in Ladakh and Zanskar.
          </p>
          {/* BUTTONS */}
          {/* <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
