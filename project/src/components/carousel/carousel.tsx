import "./carousel.css";

import React, { useState } from "react";

interface CarouselProps {
  slides: JSX.Element[]; 
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 5 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 5 : prevSlide - 1
    );
  };

  return (
    <div className="wrapper">
      <div className="carousel">
        <button className="prev" onClick={prevSlide}></button>
        <div className="slides-container">
          {slides.slice(currentSlide, currentSlide + 5).map((slide, index) => (
            <div key={index} className="slide">
              {slide}
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide}></button>
      </div>
    </div>
  );
};

export default Carousel;
