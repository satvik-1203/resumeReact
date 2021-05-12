import React from "react";

export default function Work({ Heading, Picture }) {
  return (
    <div>
      <h1>{Heading}</h1>
      <div className="workImg">
        <img src={Picture} alt="Work picture" />
      </div>
    </div>
  );
}
