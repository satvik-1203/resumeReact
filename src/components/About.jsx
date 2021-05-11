import React from "react";
import home1 from "../img/home1.png";

export default function About() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>DREAMS</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>True.</h2>
          </div>
        </div>
        <p>
          Contact us for ant photography ideas that you have. We have
          professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={home1} alt="Picture" />
    </div>
  );
}
