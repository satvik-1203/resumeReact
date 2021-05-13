import React from "react";
import About from "../components/About";
import FaqSection from "../components/FaqSection";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { pageAni } from "../animations/pageAnimation";

export default function AboutUs() {
  return (
    <motion.div
      variants={pageAni}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <About />
      <Services />
      <FaqSection />
    </motion.div>
  );
}
