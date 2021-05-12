import React from "react";
import { Link } from "react-router-dom";

export default function Work({ Movie }) {
  return (
    <div>
      <div className="workCard">
        <h1>{Movie.title}</h1>

        <div className="line"></div>
        <Link className="workImg" to={Movie.url}>
          <img src={Movie.mainImg} alt="Work picture" />
        </Link>
      </div>
    </div>
  );
}
