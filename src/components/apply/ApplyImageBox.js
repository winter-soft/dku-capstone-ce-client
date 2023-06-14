import React, {useState} from "react";
import 'swiper/css';

const ApplyImageBox = ({title, date, imgUrl}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const activeClass = isActive ? 'active' : '';

  return (
    <div className={`applyBox ${activeClass}`} onClick={handleClick}>
      <img src={imgUrl} alt=""/>
      <p>{title}<br/></p>
      <p className="date">{date}</p>
    </div>
  );
};

export default ApplyImageBox;