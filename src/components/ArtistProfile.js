import React from "react";
import CTAButton from "./CTAButton";

const ArtistProfile = ({ name, tagline, bio, image, links }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center bg-gray-50 py-16 px-6">
        <img
          src={image}
          alt={name}
          className="rounded-full w-48 h-48 mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>
        <p className="text-xl text-gray-700">{tagline}</p>
      </div>

      {/* Biography Section */}
      <div className="bg-white py-12 px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About {name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{bio}</p>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Check Out {name}'s Music
        </h3>
        <div className="flex justify-center space-x-4">
          {links.map((link) => (
            <CTAButton key={link.platform} text={link.platform} link={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
