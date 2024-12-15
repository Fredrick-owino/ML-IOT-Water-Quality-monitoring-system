import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
     "/public/assets/carousel/Shahero-bg.jpg.jpg",
    "/public/assets/carousel/Your paragraph text (2).png",
    "/public/assets/carousel/Your paragraph text (6).png",
    "/public/assets/carousel/Your paragraph text (5).png",
    "/public/assets/carousel/iot7.jpeg",
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;