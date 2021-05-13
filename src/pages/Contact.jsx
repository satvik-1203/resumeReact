import React from "react";
import { pageAni } from "../animations/pageAnimation";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      variants={pageAni}
      initial="initial"
      animate="animate"
      className="bodyWork"
      exit="exit"
    >
      <div>Contact Us</div>
    </motion.div>
  );
}
