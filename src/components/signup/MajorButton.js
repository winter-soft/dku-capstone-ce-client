import React from "react";

const MajorButton = ({title, content}) => {
  return (
    <div className="majorBtns">
      <button className="majorBtn">
        {title}
        <span>{content}</span>
      </button>
    </div>
  );
}

export default MajorButton;