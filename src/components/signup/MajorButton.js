import React, {useState} from "react";

const MajorButton = ({title, content, onClick}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick(title, !isActive);
    }
  };

  return (
    <div className={`majorBtns ${isActive ? "active" : ""}`}>
      <button className={`majorBtn ${isActive ? "active" : ""}`} onClick={handleClick}>
        {title}
        <span>{content}</span>
      </button>
    </div>
  );
};

export default MajorButton;