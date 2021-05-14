import React, { useState } from "react";
import { motion } from "framer-motion";
import {} from "../animations/pageAnimation";
import styled from "styled-components";

export default function FaqQuestion({ question, answer }) {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => {
        setToggle(!toggle);
      }}
      className="faqQuestion"
    >
      <motion.h4 layout className="question">
        {question}
      </motion.h4>

      {toggle && <motion.div className="answer">{answer}</motion.div>}

      <motion.div layout className="line"></motion.div>
    </motion.div>
  );
}
