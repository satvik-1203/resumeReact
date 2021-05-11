import React from "react";

export default function Service({ img, info, heading }) {
  return (
    <div>
      <div className="flexService">
        <img src={img} alt="Icon" />
        <div className="serviceHeading">{heading}</div>
      </div>
      <div className="info">{info}</div>
    </div>
  );
}
