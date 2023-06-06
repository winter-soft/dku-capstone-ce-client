import React from "react";
import {Link} from "react-router-dom";

const ShareButton = ({linkTo}) => {
  return (
    <div className="shareButton">
      <Link to={linkTo}>
        <ion-icon name="share-social-outline"></ion-icon>
      </Link>
    </div>
  );
}

export default ShareButton;