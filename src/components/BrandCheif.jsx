import react from 'react';
const BrandCheif = () => {
    return(<>
     {/* Top Header */}
            <div className="mt-8 mb-8 px-6 sm:px-12 md:px-16 lg:px-20 text-center lg:text-left">
                <h3 className=" text-center uppercase text-xs sm:text-sm text-amber-400 mb-3">
                    CHEF         
                </h3>
                <h4 className=" text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white leading-snug font-light">
                    Our brand chef
                </h4>
            </div>



        {/* Main Section */}
        <section className="flex flex-col md:flex-row w-full h-auto">

        <div className="w-full md:w-1/2">
        <img
          src="src/assets/Brand.svg" // your image path
          alt="About"
          className="w-full h-full object-cover"/>
        </div>







        <div className="text-left relative z-10 w-full lg:w-1/2 flex flex-col justify-start px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
        
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl uppercase text-white leading-snug mb-6 font-light tracking-wide">
            Chef Jomon
          </h4>
          <sub className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md">
            senior chef at tiffin boxsenior chef at tiffin box
          </sub>

         <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring 
          </p>

         <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep.
          </p>
        </div>

        </section>
    </>)
}
export default BrandCheif;