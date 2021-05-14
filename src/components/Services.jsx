import React from "react";
import Service from "./Service";
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";
import { motion } from "framer-motion";
import { fade } from "../animations/pageAnimation";
import { useScroll } from "../hooks/useScroll";

export default function Services() {
  const [element, control] = useScroll();
  return (
    <motion.div
      initial="initial"
      animate={control}
      variants={fade}
      ref={element}
    >
      <div className="servicesFlex">
        <div className="services">
          <h1>
            High <span>quality</span> services.
          </h1>
          <div className="servicesGrid">
            <Service
              className="serviceCard"
              img={clock}
              heading={"Efficient"}
              info="Lorem ipsum dolor sit amet."
            />
            <Service
              className="serviceCard"
              img={teamwork}
              heading={"Teamwork"}
              info="Lorem ipsum dolor sit amet."
            />
            <Service
              className="serviceCard"
              img={diaphragm}
              heading={"Pro Grade Gear"}
              info="Lorem ipsum dolor sit amet."
            />
            <Service
              className="serviceCard"
              img={money}
              heading={"Affordable"}
              info="Lorem ipsum dolor sit amet."
            />
          </div>
        </div>
        <div className="imageCamera">
          <img className="home2" src={home2} alt="Home2" />
        </div>
      </div>
    </motion.div>
  );
}
