import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    slidesToScroll: 1,
  };
  const Images = [
    {
      id: 1,
      image: "/acc.jpg",
    },
    {
      id: 2,
      image: "/qstn.jpg",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {Images.map((item) => (
          <img
            key={item.id}
            src={item.image}
            className="image"
            alt="image"
            width="200"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
