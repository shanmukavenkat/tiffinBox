import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, Instagram, Facebook, Twitter } from 'lucide-react';
import image1 from '../assets/The_image.svg';

const TiffinBoxLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      title: "AUTHENTIC SOUTH INDIAN CUISINE",
      image: image1,
      number: "1"
    },
    {
      title: "TRADITIONAL BIRYANI DELIGHTS",
      image: image1,
      number: "2"
    },
    {
      title: "HOMESTYLE THALI MEALS",
      image: image1,
      number: "3"
    },
    {
      title: "FRESH DAILY TIFFINS",
      image: image1,
      number: "4"
    }
  ];

  // Auto-slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2.5;
      });
    }, 100);
    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  const getPreviousSlide = () => (currentSlide - 1 + slides.length) % slides.length;
  const getNextSlide = () => (currentSlide + 1) % slides.length;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-4 bg-black/70 backdrop-blur-md">
        <button className="text-yellow-500 hover:text-yellow-400 transition-colors">
          <Menu size={28} />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          <img src="/src/assets/logo.png" alt="The Tiffin Box" className="h-8 sm:h-9" />
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded flex items-center gap-2 transition-all text-sm md:text-base">
          View Menu
          <ChevronRight size={20} />
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-24 px-4 sm:px-6 md:px-12">
        
        {/* Progress Bars (Vertical) */}
        <div className="hidden sm:flex flex-col gap-5 lg:ml-12 items-center lg:items-start">
          {slides.map((_, index) => (
            <div
              key={index}
              className="relative h-12 sm:h-16 w-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer"
              onClick={() => {
                setCurrentSlide(index);
                setProgress(0);
              }}
            >
              <div
                className="absolute bottom-0 right-0 w-full bg-yellow-500 rounded-full transition-all duration-100 ease-linear"
                style={{
                  height: currentSlide === index ? `${progress}%` : '0%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-6 md:px-12 lg:px-16 py-10 lg:py-0 text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Animated Title */}
            <div className="overflow-hidden mb-6 sm:mb-8">
              <h1
                key={currentSlide}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] leading-tight transition-all duration-700 ease-out"
              >
                {slides[currentSlide].title}
              </h1>
            </div>

            {/* CTA Button */}
            <button className="border-2 border-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 rounded flex items-center gap-2 transition-all group mx-auto lg:mx-0">
              Order Now
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-12 relative">
          <div className="flex items-center gap-6 sm:gap-8 flex-row-reverse w-full justify-center">

            {/* Carousel Container */}
            <div className="relative w-full max-w-xs sm:max-w-md">
              {/* Previous Slide */}
              <div className="absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 w-3/4 opacity-40 transition-all duration-500 hidden md:block">
                <img
                  src={slides[getPreviousSlide()].image}
                  alt="Previous"
                  className="w-full h-32 sm:h-40 object-cover border-none rounded-md"
                />
              </div>

              {/* Current Slide */}
              <div className="relative w-full transition-all duration-500 z-10">
                <img
                  src={slides[currentSlide].image}
                  alt="Current"
                  className="w-full h-48 sm:h-64 md:h-80 object-cover border-none shadow-lg rounded-lg"
                />
              </div>

              {/* Next Slide */}
              <div className="absolute -bottom-20 sm:-bottom-28 left-1/2 -translate-x-1/2 w-3/4 opacity-40 transition-all duration-500 hidden md:block">
                <img
                  src={slides[getNextSlide()].image}
                  alt="Next"
                  className="w-full h-32 sm:h-40 object-cover border-none rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="fixed right-3 sm:right-6 md:right-12 bottom-4 sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col gap-4 sm:gap-6 z-40">
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default TiffinBoxLanding;
