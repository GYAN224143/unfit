import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowLeft from "./../assets/profileImages/ArrowLeft.png";
import BannerOne from "./../assets/profileImages/BannerOne.png";
import BannerTwo from "./../assets/profileImages/BannerTwo.png";
import { useRef } from "react";

const SimpleSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="Slider-header">
        <p>Jackpot Deals</p>
        <div className=" cursor-pointer" onClick={next}>
          <img src={ArrowLeft} alt="" />
        </div>
      </div>
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="slider-card">
            <img src={BannerOne} alt="" />
            <p>Wow all Product Combo</p>
          </div>
          <div className="slider-card">
            <img src={BannerTwo} alt="" />
            <p>Mama Earth Combo</p>
          </div>
          <div className="slider-card">
            <img src={BannerOne} alt="" />
            <p>Nykaa Cosmatics Combo</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SimpleSlider;
