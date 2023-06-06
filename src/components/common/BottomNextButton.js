import React from "react";
import {Link} from "react-router-dom";

const BottomNextButton = ({text, linkTo}) => {
  return (
    <div>
      <Link to={linkTo}>
        <button className="bottomNextBtn">{text}</button>
      </Link>
    </div>
  );
}

export default BottomNextButton;