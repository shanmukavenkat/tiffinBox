import React from "react";

const OnlineOrders = () => {
  return (
    <>
      <section className="relative flex flex-col justify-between lg:flex-row lg:items-stretch w-full min-h-screen bg-black overflow-hidden">

        {/* === LEFT TEXT SECTION === */}
        <div className="text-left relative z-10 w-full lg:w-1/2 flex flex-col justify-start px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
          <h3 className="uppercase tracking-widest text-xs sm:text-sm text-amber-400 mb-3">
            ONLINE ORDER
          </h3>

          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl uppercase text-white leading-snug mb-6 font-light tracking-wide">
            FRESH SOUTH INDIAN FLAVORS DELIVERED!
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
              Order Online
              <span className="text-amber-400">{`>`}</span>
            </button>
          </div>
        </div>

        {/* === RIGHT IMAGE SECTION === */}
        <div className="relative max-w-full max-h-full lg:w-1/2 flex items-center justify-center overflow-visible mt-10 lg:mt-0">
          {/* Enlarged Background Delivery Outline */}
          <div className="absolute inset-0 flex right-35 items-center justify-center z-0 scale-[1.2] sm:scale-[1.4] md:scale-[1.6] lg:scale-[1.8] xl:scale-[2] translate-x-6 sm:translate-x-8 md:translate-x-12 lg:translate-x-16">
            <img
              src="src/assets/Background_twi.png"
              alt="Delivery illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Floating Food Image */}
          <div className="absolute top-10 right-6 sm:top-14 sm:right-16 md:top-16 md:right-24 lg:top-20 lg:right-32 z-20 w-20 sm:w-24 md:w-28 lg:w-32">
            <img
              src="src/assets/Food_item.svg"
              alt="Food item"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default OnlineOrders;
