import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import {Pagination} from "swiper";
import SliderImage from "./SliderImage";

const Slider = () => {
  const imgExampleUrl = [
    'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v904-nunny-004.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=219408f56f3a8a254f228628261029d3',
    'https://i.pinimg.com/originals/fa/c0/5c/fac05c110c458e9bab3a3248bfb3c376.jpg',
    'https://www.pixelstalk.net/wp-content/uploads/2016/05/Beautiful-Gradient-Wallpaper.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20200710/pngtree-soft-red-gradient-abstract-background-image_351706.jpg',
  ]
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{clickable: true,}}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[0]} title="전국 입주관리매니저 모집"
                                content="6월 7일까지, 경력 1년 이상"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[1]} title="배너 제목2" content="내용"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[2]} title="배너 제목3" content="내용"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[3]} title="배너 제목4" content="내용"/></SwiperSlide>
    </Swiper>
  );
}

export default Slider;