import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import {Pagination} from "swiper";
import SliderImage from "./SliderImage";

const Slider = () => {
  const imgExampleUrl = [
    'https://t1.daumcdn.net/news/201804/09/akn/20180409111747951eruq.jpg',
    'https://www.newsworker.co.kr/news/photo/202003/64287_69905_3132.jpg',
    'https://image.tving.com/upload/cms/caip/CAIP0400/P001720602.jpg/dims/resize/1280',
    'https://newsroom-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2022/05/SKT_%EC%9A%B0%EC%88%98%EC%BD%9C%EC%84%BC%ED%84%B0_PC.jpg',
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
                                content="6월 19일까지, 경력 1년 이상"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[1]} title="풀무원 e-fresh 온라인 모니터 22기 모집"
                                content="6월 18일까지"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[2]} title=" tvN 댄스가스유랑단 여주 방청객 모집"
                                content="여주 여성회관, 6월 23일까지 홈페이지 접수"/></SwiperSlide>
      <SwiperSlide><SliderImage imgUrl={imgExampleUrl[3]} title="한국리서치 전화조사원 모집"
                                content="전화설문진행 면접원 모집, 6월 29일까지"/></SwiperSlide>
    </Swiper>
  );
}

export default Slider;