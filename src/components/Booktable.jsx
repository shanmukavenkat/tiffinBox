import React from "react";

const Booktable = () =>{
    return(
        <>
        
        
          <section className="flex flex-col md:flex-row w-full h-auto">


{/* Left side image */}
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/BookTable_img.svg" // your image path
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>







  <div className="text-left relative z-10 w-full lg:w-1/2 flex flex-col justify-start px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
          <h3 className="uppercase tracking-widest text-xs sm:text-sm text-amber-400 mb-3">
           Book Table
          </h3>

          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl uppercase text-white leading-snug mb-6 font-light tracking-wide">
            Planning a 
meal at The 
Tiffin Box?
          </h4>

          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of
            The Tiffin Box from the comfort of your home. Order online for a quick and easy
            delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast,
            ensuring a delicious experience every time.
          </p>

          {/* Order Button */}
          <div>
            <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base inline-flex items-center gap-2">
              Book Table
              <span className="text-amber-400">{`>`}</span>
            </button>
          </div>
        </div>




      
      

    
    </section>
        
        </>
    )
}
export default Booktable;