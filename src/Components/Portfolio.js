import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-screen h-screen bg-gray-100 flex justify-center items-center p-6"
    >
    <div className="max-w-3xl mx-auto text-center space-y-4">
  <p className="font-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
    This portfolio website was built by me using{" "}
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      JavaScript
    </span>{" "}
    and{" "}
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      React
    </span>
    , with{" "}
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      Tailwind
    </span>{" "}
    for styling.
  </p>

  <p className="font-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
    Every component and interaction was hand-crafted.
  </p>

  <p className="font-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      Enjoy!
    </span>
  </p>
</div>

    </section>
  );
};

export default Portfolio;
