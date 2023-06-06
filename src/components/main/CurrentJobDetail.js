import React from "react";
import 'swiper/css';

const CurrentJobDetail = ({imgUrl, title, content}) => {
  return (
    <div className="currentJobBox">
      <img src={imgUrl} alt=""/>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}

export default CurrentJobDetail;