import React, { useState } from "react";
import Work from "../components/Work";
import { MovieState } from "../MovieState";
import { motion } from "framer-motion";
import { pageAni } from "../animations/pageAnimation";

export default function OurWork() {
  const [Movies] = useState(MovieState);
  return (
    <motion.div
      variants={pageAni}
      initial="initial"
      animate="animate"
      className="bodyWork"
      exit="exit"
    >
      {Movies.map((Movie) => (
        <Work key={Movie.url} Movie={Movie} />
      ))}
    </motion.div>
  );
}
