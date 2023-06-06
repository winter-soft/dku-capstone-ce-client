import React from "react";

const SliderImage = ({imgUrl, title, content}) => {
  return (
    <div className="sliderImage">
      <img src={imgUrl} alt=""/>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}

export default SliderImage;