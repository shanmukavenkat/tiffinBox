import React from "react";

const Specialities = () => {

const SpecialitiesData = [
    {
        id: 1,
        title: 'Authentic South Indian Cuisine',
        desc: 'Our dishes are prepared using traditional recipes to bring you the true flavors of South India'
    },
    {
        id: 2,
        title: 'Expert Chefs',
        desc: 'Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight'
    },
    {
        id: 3,
        title: 'Fresh, Quality Ingredients',
        desc: 'We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal'
    },
    {
        id: 4,
        title: 'Comfortable Dining Experience',
        desc: 'Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.'
    },
    {
        id: 5,
        title: 'Health-Conscious Options',
        desc: 'From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.'
    },
    {
        id: 6,
        title: 'Seamless Online Ordering & Delivery',
        desc: 'Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.'
    }
];

    return (
        <>
            {/* Top Header */}
            <div className="mt-8 mb-8 px-6 sm:px-12 md:px-16 lg:px-20 text-center lg:text-left">
                <h3 className=" text-center uppercase text-xs sm:text-sm text-amber-400 mb-3">
                    why tiffin box         
                </h3>
                <h4 className=" text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white leading-snug font-light">
                    Our Specialties 
                </h4>
            </div>

            {/* Main Section */}
            <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 px-6 sm:px-12 md:px-16 lg:px-20 py-8">
                
                {/* Left Side - First 3 items */}
                <div className="w-full lg:w-1/3 space-y-6 text-right ">
                    {SpecialitiesData.slice(0, 3).map((item) => (
                        <div key={item.id} className="text-white">
                            <h5 className="font-bold text-lg mb-2">{item.title}</h5>
                            <p className="font-light text-sm text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Center - Image */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img 
                        src="src/assets/Specialities.svg" 
                        alt="Specialities image" 
                        className="w-full max-w-md h-auto object-contain"
                    />
                </div>

                {/* Right Side - Last 3 items */}
                <div className="w-full lg:w-1/3 space-y-6 text-left ">
                    {SpecialitiesData.slice(3, 6).map((item) => (
                        <div key={item.id} className="text-white">
                            <h5 className="font-bold text-lg mb-2">{item.title}</h5>
                            <p className="font-light text-sm text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
                     {/* SPOON - Image */}
              
            </section>
            {/*-- SPOON - Image */}
                <div className="flex justify-center mt-4 mb-8">
                    <img 
                        src="src/assets/Spon.svg" 
                        alt="Specialities image" 
                        className="w-full max-w-md h-auto object-contain"
                    />
                </div>
        </>
    )
}

export default Specialities;