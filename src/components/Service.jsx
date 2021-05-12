import React from "react";

export default function Service({ img, info, heading }) {
  return (
    <div>
      <div className="flexService">
        <div className="ImgDiv">
          <img className="Icon" src={img} alt="Icon" />
        </div>
        <div className="headingDiv">
          <div className="serviceHeading">{heading}</div>
        </div>
      </div>
      <div className="info">{info}</div>
    </div>
  );
}
