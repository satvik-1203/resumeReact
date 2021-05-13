import React from "react";

export default function WorkDetail({ movie }) {
  return (
    <div className="workDetail">
      <div className="title flex-col">{movie.title}</div>
      <div className="img">
        <img src={movie.mainImg} alt="" />
      </div>
      <div className="cards">
        {movie.awards.map((award) => (
          <div key={award.url} className="card">
            <div className="awardTitleLine">
              <div className="awardTitle">{award.title}</div>
              <div className="cardLine"></div>
            </div>

            <div className="description">{award.description}</div>
          </div>
        ))}
      </div>
      <div className="secondaryImgContainer ">
        <img className="secondaryImg" src={movie.secondaryImg} alt="" />
      </div>
    </div>
  );
}
