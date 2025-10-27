import React from "react";

const Insta = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-amber-400 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            INSTAGRAM
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider leading-tight">
            JOIN OUR
            <br />
            COMMUNITY
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {/* Image 1 */}
          <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="/src/assets/instagram1.svg"
              alt="Team gathering"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
           
             
          </div>

          {/* Image 2 */}
          <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="/src/assets/instagram2.svg"
              alt="Happy customers"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
          </div>

          {/* Image 3 */}
          <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="/src/assets/instagram3.svg"
              alt="Family celebration"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
           
          </div>

          {/* Image 4 */}
          <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="/src/assets/instagram4.svg"
              alt="Delicious dish"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insta;
