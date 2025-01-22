import React from "react";
import promoImage from "../assets/promoharmoney.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-12 gap-8">
      {/* Left Section: Image */}
      <div className="flex justify-center md:justify-end md:w-1/2">
        <img
          src={promoImage}
          alt="PromoHarmony Logo"
          className="rounded-lg shadow-xl w-full max-w-sm h-auto object-contain"
        />
      </div>

      {/* Right Section: Text */}
      <div className="md:w-1/2 flex flex-col items-start md:items-start">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
          Welcome to PromoHarmony
        </h1>
        <p className="text-lg text-gray-400 mb-4 leading-relaxed">
          Elevate your brand with PromoHarmony, your destination for seamless promotions that engage your audience.
        </p>
        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Experience the harmony of visuals and sound, designed to captivate and inspire. Collaborate with talented creatives from musicians to visual artists.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
