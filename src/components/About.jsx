import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

export default function About() {
  return (
    <_About>
      <$desription>
        <$title>
          <$titleHidden>
            <h2>We work to make</h2>
          </$titleHidden>
          <$titleHidden>
            <h2>
              Your <span>DREAMS</span> come{" "}
            </h2>
          </$titleHidden>
          <$titleHidden>
            <h2>True.</h2>
          </$titleHidden>
        </$title>
        <p>
          Contact us for any photography ideas that you have. <br /> We have
          professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </$desription>
      <$image>
        <$IMG src={home1} alt="Picture" />
      </$image>
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
`;

const $image = styled.div`
  overflow: hidden;
`;

const $IMG = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
`;

const $titleHidden = styled.div`
  overflow: hidden;
`;
