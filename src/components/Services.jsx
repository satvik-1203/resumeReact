import React from "react";
import Service from "./Service";
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";

export default function Services() {
  return (
    <div>
      <div className="services">
        <h1>
          High <span>quality</span> services
        </h1>
        <div className="servicesGrid">
          <Service
            img={clock}
            heading={"Efficient"}
            info="Lorem ipsum dolor sit amet."
          />
          <Service
            img={teamwork}
            heading={"Teamwork"}
            info="Lorem ipsum dolor sit amet."
          />
          <Service
            img={diaphragm}
            heading={"Pro Grade Gear"}
            info="Lorem ipsum dolor sit amet."
          />
          <Service
            img={money}
            heading={"Affordable"}
            info="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
      <img src={home2} alt="Homne2" />
    </div>
  );
}
