import React from "react";

const CTAButton = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
    >
      {text}
    </a>
  );
};

export default CTAButton;
