import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../commonSliderLayout/commonSlider.css";

interface CommonSliderProps {
  children: ReactNode;
}

const CommonSlider: React.FC<CommonSliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    loop: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CommonSlider;
