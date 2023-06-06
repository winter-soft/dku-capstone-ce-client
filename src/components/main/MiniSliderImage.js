import React from "react";

const MiniSliderImage = ({imgUrl, title, content, height}) => {
  return (
    <div className="miniSliderImage">
      <img src={imgUrl} alt="" style={{height: height ? `${height}px` : '150px'}}/>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}

export default MiniSliderImage;