import React from "react";
import {Link} from "react-router-dom";

const BottomMenuDetail = ({linkTo, icon, text}) => {
  const isActive = !icon.includes('outline') ? 'active' : '';
  return (
    <Link to={linkTo} className={`menu ${isActive}`}>
      <div className="menuIcon">
        <ion-icon name={icon}></ion-icon>
      </div>
      <div className="menuText">{text}</div>
    </Link>
  );
}

export default BottomMenuDetail;