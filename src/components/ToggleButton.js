import React from "react";

const ToggleButton = ({text}) => {
  return (
    <div className="toggle">
      <span className="toggleDescription">{text}</span>
      <label className="switch">
        <input type="checkbox" className="toggleInput"></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;