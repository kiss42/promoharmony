import React from "react";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 min-h-screen p-8">
      {/* Left Section: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
        <img
          src="https://via.placeholder.com/400" // Replace with your image
          alt="Promo"
          className="rounded-lg shadow-lg w-72 h-96 object-cover"
        />
      </div>

      {/* Right Section: Text */}
      <div className="md:w-1/2 px-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to PromoHarmony</h1>
        <p className="text-lg text-gray-700 mb-6">
          Elevate your brand with PromoHarmony, your destination for seamless promotions that engage your audience.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Experience the harmony of visuals and sound, designed to captivate and inspire.
        </p>

        {/* Call-to-Action Button */}
        <CTAButton text="Learn More" link="#learn-more" />
      </div>
    </div>
  );
};

export default HeroSection;
