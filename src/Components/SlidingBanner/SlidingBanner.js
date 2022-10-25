import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import banner1 from "../../images/banner/spoken-english.jpg";
import banner2 from "../../images/banner/digital-markating.png";
import banner3 from "../../images/banner/networking.png";
import banner4 from "../../images/banner/photo-editing.png";
import banner5 from "../../images/banner/programming.png";
import banner6 from "../../images/banner/video-editing.png";

const SlidingBanner = () => {
  return (
    <div className="">
      <Swiper
        navigation={true}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img className="w-full h-60" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-full h-60" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-full h-60" src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-full h-60" src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-full h-60" src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="w-full h-60" src={banner6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlidingBanner;
