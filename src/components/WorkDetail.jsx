import React from "react";

export default function WorkDetail({ movie }) {
  return (
    <div className="WorkDetail">
      <div className="title">movie.title</div>
      <div className="img">
        <img src={movie.mainImg} alt="" />
      </div>
      <div className="cards">
        {movie.awards.map((award) => (
          <div className="card">
            <div>{award.title}</div>
            <div className="line"></div>
            <div>{award.description}</div>
          </div>
        ))}
      </div>
      {movie.secondaryImg}
    </div>
  );
}
