import React, {useState} from "react";
import 'swiper/css';

const ApplyBox = ({title, company, date}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const activeClass = isActive ? 'active' : '';

  return (
    <div className={`applyBox ${activeClass}`} onClick={handleClick}>
      <p>{title} <span>{company}</span></p>
      <p className="date">{date}</p>
    </div>
  );
};

export default ApplyBox;