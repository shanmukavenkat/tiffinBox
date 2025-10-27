import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto">
      
      {/* Left side image */}
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/Image_one.png" // your image path
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-amber-400 px-8 md:px-16 py-12">
        <h3 className="text-left uppercase tracking-widest text-sm text-gray-800 mb-3">
          About Us
        </h3>
        <h2  className="text-left text-4xl md:text-5xl uppercase  text-gray-900 leading-tight mb-8">
          Experience Authentic South Indian Flavors at The Tiffin Box
        </h2>
        <button className="border border-gray-900 text-gray-900 px-6 py-2 w-fit  transition duration-300">
         {` Know More >`}
        </button>
      </div>

    </section>
  );
};

export default About;
