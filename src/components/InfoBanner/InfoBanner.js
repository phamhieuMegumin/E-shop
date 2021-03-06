import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InfoBanner.css";
function InfoBanner() {
  const [showSlide, setShowSlide] = useState(3);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: showSlide,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const changeSetting = () => {
    if (window.innerWidth < 900) {
      setShowSlide(2);
    }
  };
  window.addEventListener("resize", changeSetting);
  return (
    <div className="info-banner">
      <Slider {...settings}>
        <div className="info-box">
          <div className="info-items">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h2>27/7 support</h2>
              <p>
                Open sans 14px Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="info-items">
            <div className="icon">
              <i className="fas fa-undo"></i>
            </div>
            <div className="info-content">
              <h2>30-DAYS FREE RETURN</h2>
              <p>
                Open sans 14px Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="info-items">
            <div className="icon">
              <i className="fas fa-truck"></i>
            </div>
            <div className="info-content">
              <h2>FREE SHIPING</h2>
              <p>
                Open sans 14px Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="info-items">
            <div className="icon">
              <i className="fas fa-undo"></i>
            </div>
            <div className="info-content">
              <h2>30-DAYS FREE RETURN</h2>
              <p>
                Open sans 14px Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default InfoBanner;
