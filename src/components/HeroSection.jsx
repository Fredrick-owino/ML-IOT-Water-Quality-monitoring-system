import React from "react";
import Slider from "react-slick";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...sliderSettings}>
        <div>
          <img
            src="/assets/carousel/Your paragraph text (2).png"
            alt="Slide 1"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src="/assets/carousel/Your paragraph text (6).png"
            alt="Slide 2"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src="/assets/carousel/Your paragraph text (5).png"
            alt="Slide 3"
            className="w-full h-screen object-cover"
          />
        </div>
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-6xl font-extrabold tracking-wide">
          Revolutionizing Aquaculture With AI Powered System
        </h1>
        <p className="mt-4 text-2xl">
          Real-time insights for water and atmospheric conditions.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
