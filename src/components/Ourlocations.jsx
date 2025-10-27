import React from "react";
 const Ourlocations = () =>{
    return(
        <>
        
          <section className="flex flex-col md:flex-row w-full h-auto">
     <div className="text-left relative z-10 w-full lg:w-1/2 flex flex-col justify-start px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
          <h3 className="uppercase tracking-widest text-xs sm:text-sm text-amber-400 mb-3">
            our locations        
            </h3>

          <h4 className="text-5xl sm:text-3xl md:text-5xl lg:text-5xl uppercase text-white leading-snug mb-6 font-light tracking-wide">
            Find Us 
            at These 
            Convenient Locations
          </h4>

          <div>
            <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base inline-flex items-center gap-2">
              Our Store
              <span className="text-amber-400">{`>`}</span>
            </button>
          </div>
        </div>
        
        {/* Left side image */}
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/Maps.svg" // your image path
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
        
        </>
    )
}
export default Ourlocations;