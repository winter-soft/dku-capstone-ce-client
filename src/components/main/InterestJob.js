import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import MiniSliderImage from "./MiniSliderImage";

const InterestJob = () => {
  const imgExampleUrl = 'https://webzine.kccworld.co.kr/data/cn/87/7.jpg';
  return (
    <div>
      <p className="mainTitle">내 관심분야에요</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
      >
        <SwiperSlide>
          <MiniSliderImage imgUrl={imgExampleUrl} title="입주관리매니저" content="KCC 부산 센텀"/>
        </SwiperSlide>
        <SwiperSlide>
          <MiniSliderImage imgUrl={imgExampleUrl} title="입주관리매니저" content="KCC 부산 센텀"/>
        </SwiperSlide>
        <SwiperSlide>
          <MiniSliderImage imgUrl={imgExampleUrl} title="입주관리매니저" content="KCC 부산 센텀"/>
        </SwiperSlide>
        <SwiperSlide>
          <MiniSliderImage imgUrl={imgExampleUrl} title="입주관리매니저" content="KCC 부산 센텀"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default InterestJob;