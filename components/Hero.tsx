"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

  var settings = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  const slideData = [
    {
      id: 0,
      img: "bgg1.jpg",
      title: "Trending Item",
      mainTitle: "SKINKARE TO ALL TYPE SKIN",
      price: "RP 350.000",
    },
     {
      id: 0,
      img: "bgg5.jpg",
      title: "Trending Item",
      mainTitle: "SUNSCREEN TO INDONESIAN WOMAN",
      price: "RP 150.000",
    },
     {
      id: 0,
      img: "bgg3.jpg",
      title: "Trending Item",
      mainTitle: "BEST CREAM TO TROPICAL CLIMATE",
      price: "RP 200.000",
    },
  ];

  return <div>
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
            {slideData.map((item) => (
              <Slide 
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            ))}
      </Slider>
    </div>
  </div>;
};

export default Hero;
