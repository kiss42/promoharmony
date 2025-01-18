import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import artists from "../data/artists";
import CTAButton from "../components/CTAButton";

const ArtistPage = () => {
  const { artistId } = useParams();
  const artist = artists.find((a) => a.id === artistId);

  // Handle music dynamically based on artist data
  useEffect(() => {
    let sound;
    if (artist?.music) {
      sound = new Howl({
        src: artist.music.src, // Dynamically load music source
        autoplay: artist.music.autoplay || false,
        loop: artist.music.loop || false,
        volume: artist.music.volume || 1.0,
        html5: true, // Ensure compatibility across devices
      });

      sound.play();
    }

    // Cleanup: stop music on unmount
    return () => {
      if (sound) sound.stop();
    };
  }, [artist]);

  if (!artist) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">Artist Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          The artist you are looking for does not exist. Please check the URL or go back to the homepage.
        </p>
      </div>
    );
  }

  const {
    backgroundColor = "bg-gray-900",
    textColor = "text-gray-100",
    accentColor = "text-red-500",
  } = artist?.design || {};

  return (
    <div className={`${backgroundColor} ${textColor} min-h-screen flex flex-col`}>
      <div className="flex flex-col md:flex-row items-start py-12 px-6 md:px-12 lg:px-24 gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={artist?.image}
            alt={artist?.name}
            className="rounded-lg shadow-lg w-full max-w-[350px] h-auto object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2">
          <h1 className={`text-5xl font-bold mb-6 ${accentColor}`}>{artist?.name}</h1>
          <h2 className="text-xl text-gray-400 mb-4">{artist?.tagline}</h2>
          <p className="text-lg leading-relaxed mb-8">{artist?.bio}</p>

          {artist?.links?.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Explore {artist?.name}'s Work</h3>
              <div className="flex flex-wrap gap-4">
                {artist?.links.map((link) => (
                  <CTAButton key={link.platform} text={link.platform} link={link.url} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
