import React from "react";
import { Link } from "react-router-dom";
import artists from "../data/artists";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Creatives Section */}
      <div className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 underline decoration-purple-500 underline-offset-8">
          Our Creatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {artists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300 relative border border-gray-700 hover:border-purple-500"
            >
              {/* Add Icon or Tag for Artist Type */}
              <div className="absolute top-4 right-4 bg-purple-200 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                {artist.type.toUpperCase()}
              </div>
              <img
                src={artist.image}
                alt={artist.name}
                className="rounded-full w-32 h-32 mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold">{artist.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{artist.type}</p>
              <p className="text-gray-300">{artist.tagline}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p className="text-sm">
          PromoHarmony © 2025 |{" "}
          <button
            className="hover:text-white underline"
            onClick={() => alert("Contact Us page coming soon!")}
          >
            Contact Us
          </button>{" "}
          |{" "}
          <button
            className="hover:text-white underline"
            onClick={() => alert("Privacy Policy page coming soon!")}
          >
            Privacy Policy
          </button>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="hover:text-white flex items-center transition duration-300"
            onClick={() => alert("Twitter link coming soon!")}
          >
            <i className="fab fa-twitter"></i>
            <span className="ml-1">Twitter</span>
          </button>
          <button
            className="hover:text-white flex items-center transition duration-300"
            onClick={() => alert("Instagram link coming soon!")}
          >
            <i className="fab fa-instagram"></i>
            <span className="ml-1">Instagram</span>
          </button>
          <button
            className="hover:text-white flex items-center transition duration-300"
            onClick={() => alert("Facebook link coming soon!")}
          >
            <i className="fab fa-facebook"></i>
            <span className="ml-1">Facebook</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
