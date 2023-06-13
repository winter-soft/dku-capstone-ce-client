import React from "react";
import '../../css/BottomMenu.css';
import BottomDoubleButton from "./BottomDoubleButton";

const BottomDoubleButtons = () => {
  return (
    <div className="bottomMenu bottomButtons">
      <BottomDoubleButton lineTo="" text="관심 등록"></BottomDoubleButton>
      <BottomDoubleButton lineTo="/apply" text="지원하기"></BottomDoubleButton>
    </div>
  );
}

export default BottomDoubleButtons;