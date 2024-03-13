import React from "react";
import Img1 from "../assets/Img-1.jpg";
import Img2 from "../assets/Img-2.jpg";
import "../cssFiles/GetMore.css";

const GetMore = () => {
  return (
    <div className="getmore-main">
      <div className="info">
        <div className="text">
          <p>YOU MAY ALSO LIKE</p>
        </div>
        <img src={Img1} className="img-style" />
        <img src={Img2} className="img-style" />
      </div>
    </div>
  );
};

export default GetMore;
