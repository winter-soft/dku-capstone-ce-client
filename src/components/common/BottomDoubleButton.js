import React from "react";
import '../../css/BottomMenu.css';
import {Link} from "react-router-dom";

const BottomDoubleButton = ({lineTo, text}) => {
  return (
    <div className="bottomButton">
      <Link to={lineTo}>
        <button>{text}</button>
      </Link>
    </div>
  );
}

export default BottomDoubleButton;