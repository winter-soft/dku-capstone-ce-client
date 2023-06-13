import React from "react";
import {Link} from "react-router-dom";

const RoundButton = ({text, linkTo}) => {

  return (
    <div className="roundBtnBox">
      <Link to={linkTo}>
        <button className="roundBtn">
          {text}
        </button>
      </Link>
    </div>
  );
}

export default RoundButton;