import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import MiniSliderImage from "./MiniSliderImage";
import {announceListAPI} from "../../fetch";
import {getItemByKey} from "../../common";

const InterestJob = ({title}) => {
  const token = getItemByKey("token");

  const [announcement, setAnnouncement] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await announceListAPI("CLASS");
        setAnnouncement(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <p className="mainTitle">{title}</p>
      <Swiper slidesPerView={2} spaceBetween={10}>
        {Array.isArray(announcement) &&
          announcement.map((data, index) => (
            <SwiperSlide key={index}>
              <MiniSliderImage
                linkTo={`/job?id=${data.announce_id}`}
                imgUrl={data.announce_imageUrl}
                title={data.announce_title}
                content="KCC"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default InterestJob;
