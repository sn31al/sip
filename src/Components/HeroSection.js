import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {/* Slider */}
      <Slider {...settings}>
        <div>
          <img
            src = "https://farm66.staticflickr.com/65535/51713248807_584698fcd9_b.jpg "
            alt="banner"
            className="w-full h-[80vh]"
          />
        </div>
        <div>
          <img
            src="https://www.meydanfz.ae/wp-content/uploads/2021/10/Events.png "
            alt="banner"
            className="w-full h-[80vh]"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg "
            alt="banner"
            className="w-full h-[80vh]"
          />
        </div>
      </Slider>
    </>
  );
}






