import React from "react";

const About = () => {
  // Sample data
  const menuItems = [
    { id: 1, img: "src/assets/Items.png", name: "Chicken Chettinad", price:  "£ 9.99"},
    { id: 2, img: "src/assets/Items.png", name: "Chicken Chettinad", price:  "£ 9.99"},
    { id: 3, img: "src/assets/Items.png", name: "Chicken Chettinad", price:  "£ 9.99"},
    { id: 4, img: "src/assets/Items.png", name: "Chicken Chettinad", price: "£ 9.99" },
    { id: 5, img: "src/assets/Items.png", name: "Chicken Chettinad", price: "£ 9.99" },
  ];

  return (
    <>
      {/* Section title */}
      <div className="w-full flex flex-col justify-center px-6 md:px-16 py-12">
        <h3 className="text-center uppercase tracking-widest text-sm text-amber-400 mb-3">
          Featured Menu
        </h3>
        <h1 className="text-center uppercase text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
          Discover Our Most Popular Dishes
        </h1>
      </div>
      {/*background image*/}
      <div className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4"
        style={{ backgroundImage: "url('src/assets/Background_img.svg')", backgroundSize: '500px' }}
      >
        {/* Carousel */}
        <div className="carousel carousel-center flex overflow-x-auto gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 py-6 scroll-smooth w-full">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="carousel-item shrink-0 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="bg-[#111] rounded-full p-3 sm:p-4 transition duration-300">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-full w-40 sm:w-[200px] md:w-[250px] lg:w-[280px] h-40 sm:h-[200px] md:h-[250px] lg:h-[280px] object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Text below image */}
                <div className="mt-4 mb-2 px-2">
                  <h3 className="text-white text-base sm:text-lg md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-white text-sm sm:text-base mt-1">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center py-8 px-4">
        <button className="border border-gray-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-gray-800 transition duration-300 text-sm sm:text-base">
          Explore Full Menu <span className="text-amber-400">{`>`}</span>
        </button>
      </div>
    </>
  );
};

export default About;