import React, { Component } from "react";
// import Slider from "react-slick";
import './asd.scss'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      vertical: true,
      arrows: false,
    };
    return (
        <Slider {...settings}>
          <div>
            <h3>
              <img src="1.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3><img src="11.jpg" alt=""/></h3>
          </div>
          <div>
            <h3><img src="111.jpg" alt=""/></h3>
          </div>
        </Slider>
    );
  }
}
