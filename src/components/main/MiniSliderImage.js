import React from "react";
import {Link} from "react-router-dom";

const MiniSliderImage = ({linkTo, imgUrl, title, content, height}) => {
  return (
    <div className="miniSliderImage">
      <Link to={linkTo}>
        <img src={imgUrl} alt="" style={{height: height ? `${height}px` : '150px'}}/>
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </Link>
    </div>
  );
}

export default MiniSliderImage;