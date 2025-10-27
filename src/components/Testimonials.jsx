import React from "react";

const TestimonialCard = ({ avatar, name, review, timeAgo, nameColor }) => {
  return (
    <div className="shrink-0 w-full sm:w-[320px] md:w-[360px] bg-[#1a1a1a] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Avatar and Name */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-700"
        />
        <div>
          <h3
            className="font-semibold text-base sm:text-lg"
            style={{ color: nameColor || "#ffffff" }}
          >
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">{timeAgo}</p>
        </div>
      </div>

      {/* Review */}
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        {review}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anna Mathew",
      avatar: "/src/assets/Ellipse8.svg",
      review:
        "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We loved every bite!",
      timeAgo: "one day ago",
    },
    {
      id: 2,
      name: "Gerrin Tom",
      avatar: "/src/assets/Ellipse9.svg",
      review:
        "An incredible experience from start to finish. The staff was friendly and the food was perfection. Highly recommend!",
      timeAgo: "two days ago",
    },
    {
      id: 3,
      name: "Mery Elza",
      avatar: "/src/assets/Ellipse10.svg",
      review:
        "Bavette offers a cozy atmosphere and delicious dishes. We’ll definitely be coming back for our next celebration!",
      timeAgo: "three days ago",
    },
    {
      id: 4,
      name: "John David",
      avatar: "/src/assets/Ellipse10.svg",
      review:
        "The perfect place for fine dining. Great ambiance, exceptional service, and food that melts in your mouth!",
      timeAgo: "four days ago",
      nameColor: "#fbead2",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:gap-5 items-center text-center uppercase mb-12 sm:mb-20">
            <p className="font-normal text-amber-400 text-xs sm:text-sm tracking-widest">
              TESTIMONIAL
            </p>
            <div className="font-light text-white text-3xl sm:text-4xl md:text-5xl tracking-wider">
              <p className="mb-2">What Our</p>
              <p>Customers Says</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 overflow-x-auto pb-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                avatar={testimonial.avatar}
                name={testimonial.name}
                review={testimonial.review}
                timeAgo={testimonial.timeAgo}
                nameColor={testimonial.nameColor}
              />
            ))}
          </div>
        </div>
      </div>

  );
};

export default Testimonials;

