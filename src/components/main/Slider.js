import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import {Pagination} from "swiper";
import SliderImage from "./SliderImage";

const Slider = () => {
  const imgExampleUrl = 'https://blog.kakaocdn.net/dn/dAuwyU/btqDGgSNmQb/KpJMSf5lC57ArjKLOyUxkK/img.jpg';
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{clickable: true,}}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl} title="풀무원 56기 주부모니터 모집"
                                content="6월 7일까지, 서울 및 수도권 대상"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl} title="배너 제목2" content="내용"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl} title="배너 제목3" content="내용"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl} title="배너 제목4" content="내용"/></SwiperSlide>
    </Swiper>
  );
}

export default Slider;