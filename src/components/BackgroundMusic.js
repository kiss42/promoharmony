import { useEffect } from "react"; // Import only what you use
import { Howl } from "howler";

const BackgroundMusic = ({ musicUrl }) => {
  useEffect(() => {
    const sound = new Howl({
      src: [musicUrl],
      html5: true,
      autoplay: true,
      loop: true,
      volume: 0.5,
    });

    sound.play();

    return () => {
      sound.stop(); // Clean up music when the component unmounts
    };
  }, [musicUrl]);

  return null; // No UI needed
};

export default BackgroundMusic;
