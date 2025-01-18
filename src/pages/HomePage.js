import React from "react";
import { Link } from "react-router-dom";
import artists from "../data/artists";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 md:px-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to PromoHarmony</h1>
        <p className="text-xl mb-6">
          Discover and celebrate incredible creatives—from musicians to visual artists. Explore their stories and creations.
        </p>
      </div>

      {/* Our Creatives Section */}
      <div className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Creatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Link
              key={artist.id}
              to={`/artist/${artist.id}`}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="rounded-full w-32 h-32 mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800">{artist.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{artist.type}</p>
              <p className="text-gray-600">{artist.tagline}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p className="text-sm">
          PromoHarmony © 2025 | 
          <button
            className="hover:text-white underline"
            onClick={() => alert("Contact Us page coming soon!")}
          >
            Contact Us
          </button> | 
          <button
            className="hover:text-white underline"
            onClick={() => alert("Privacy Policy page coming soon!")}
          >
            Privacy Policy
          </button>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="hover:text-white flex items-center"
            onClick={() => alert("Twitter link coming soon!")}
          >
            <i className="fab fa-twitter"></i> <span className="ml-1">Twitter</span>
          </button>
          <button
            className="hover:text-white flex items-center"
            onClick={() => alert("Instagram link coming soon!")}
          >
            <i className="fab fa-instagram"></i> <span className="ml-1">Instagram</span>
          </button>
          <button
            className="hover:text-white flex items-center"
            onClick={() => alert("Facebook link coming soon!")}
          >
            <i className="fab fa-facebook"></i> <span className="ml-1">Facebook</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
