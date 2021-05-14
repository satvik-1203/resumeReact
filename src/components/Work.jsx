import React from "react";
import { Link } from "react-router-dom";
import { lineAnim, workImg } from "../animations/pageAnimation";
import { motion } from "framer-motion";

export default function Work({ Movie }) {
  return (
    <div>
      <div className="workCard">
        <h1>{Movie.title}</h1>

        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link className="workImg" to={Movie.url}>
          <motion.img
            variants={workImg}
            src={Movie.mainImg}
            alt="Work picture"
          />
        </Link>
      </div>
    </div>
  );
}
