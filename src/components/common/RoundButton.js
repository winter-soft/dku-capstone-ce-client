import React from "react";
import {Link} from "react-router-dom";

const RoundButton = ({text}) => {

  return (
    <div className="roundBtnBox">
      <Link>
        <button className="roundBtn">
          {text}
        </button>
      </Link>
    </div>
  );
}

export default RoundButton;