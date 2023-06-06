import React from "react";

const BottomMenuDetail = ({icon, text}) => {
  return (
    <div className="menu">
      <div className="menuIcon">
        <ion-icon name={icon}></ion-icon>
      </div>
      <div className="menuText">{text}</div>
    </div>
  );
}

export default BottomMenuDetail;