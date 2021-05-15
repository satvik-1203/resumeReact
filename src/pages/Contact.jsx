import React from "react";
import { pageAni, titleAnim } from "../animations/pageAnimation";
import { motion } from "framer-motion";
import { ScrollTop } from "../hooks/ScrollTop";

export default function Contact() {
  return (
    <motion.div
      variants={pageAni}
      initial="initial"
      animate="animate"
      className="bodyWork"
      exit="exit"
    >
      <h1 className="contactHeading">Get In touch.</h1>
      <ul className="contacts">
        <div className="hide">
          <motion.li variants={titleAnim} className="contact">
            <div className="circle"></div>
            <div className="item">Socials</div>
          </motion.li>
        </div>
        <div className="hide">
          <motion.li variants={titleAnim} className="contact">
            <div className="circle"></div>
            <div className="item">Send us a message</div>
          </motion.li>
        </div>
        <div className="hide">
          <motion.li variants={titleAnim} className="contact">
            <div className="circle"></div>
            <div className="item">Drop an email</div>
          </motion.li>
        </div>
      </ul>
      <ScrollTop />
    </motion.div>
  );
}
