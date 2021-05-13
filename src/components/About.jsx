import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  titleAnim,
  aboutImg,
  descriptionAbout,
} from "../animations/pageAnimation";
import { motion } from "framer-motion";
import Wave from "../animations/Wave";

export default function About() {
  return (
    <_About>
      <$desription>
        <$title>
          <$titleHidden>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </$titleHidden>
          <$titleHidden>
            <motion.h2 variants={titleAnim}>
              Your <span>DREAMS</span> come{" "}
            </motion.h2>
          </$titleHidden>
          <$titleHidden>
            <motion.h2 variants={titleAnim}>True.</motion.h2>
          </$titleHidden>
        </$title>
        <motion.p variants={descriptionAbout}>
          Contact us for any photography ideas that you have. <br /> We have
          professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={descriptionAbout}>Contact Us</motion.button>
      </$desription>
      <$image>
        <$IMG variants={aboutImg} src={home1} alt="Picture" />
      </$image>
      <Wave />
    </_About>
  );
}

const _About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10rem 8rem 10rem;
  color: white;
`;

const $title = styled.div`
  margin-bottom: 2rem;
`;

const $desription = styled.div`
  p {
    margin: 0rem 0rem 2rem 0rem;
  }
  z-index: 2;
`;

const $image = styled.div`
  overflow: hidden;
`;

const $IMG = styled(motion.img)`
  width: 100%;
  height: 85vh;
  object-fit: cover;
`;

const $titleHidden = styled.div`
  overflow: hidden;
`;
