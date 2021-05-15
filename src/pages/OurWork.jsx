import React, { useState } from "react";
import Work from "../components/Work";
import { MovieState } from "../MovieState";
import { motion } from "framer-motion";
import {
  pageAni,
  pages,
  pagesContainer,
  fade,
} from "../animations/pageAnimation";
import { ScrollTop } from "../hooks/ScrollTop";

export default function OurWork() {
  const [Movies] = useState(MovieState);
  return (
    <motion.div
      style={{ background: "#fff" }}
      variants={pageAni}
      initial="initial"
      animate="animate"
      className="bodyWork"
      exit="exit"
    >
      <motion.div className="pageContainer" variants={pagesContainer}>
        <motion.div variants={pages} className="colorPage red"></motion.div>
        <motion.div variants={pages} className="colorPage orange"></motion.div>
        <motion.div variants={pages} className="colorPage yellow"></motion.div>
        <motion.div
          variants={pages}
          className="colorPage darkBlue"
        ></motion.div>
        <motion.div variants={pages} className="colorPage violet"></motion.div>
      </motion.div>

      <motion.div variants={fade}>
        {Movies.map((Movie) => (
          <Work key={Movie.url} Movie={Movie} />
        ))}
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
}
