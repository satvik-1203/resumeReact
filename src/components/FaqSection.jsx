import React from "react";
import FaqQuestion from "./FaqQuestion";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { fade } from "../animations/pageAnimation";

export default function FaqSection() {
  const [element, control] = useScroll();

  return (
    <motion.div
      variants={fade}
      initial="initial"
      animate={control}
      ref={element}
    >
      <div className="faqSection">
        <div className="questions">
          <div className="faqHeading">
            Any Questions?
            <div>
              <span>FAQ</span>
            </div>
          </div>
          <AnimateSharedLayout>
            <FaqQuestion
              layout
              question={"How Do I Start?"}
              answer={
                "Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Ipsa, impedit"
              }
            />
            <FaqQuestion
              layout
              question={"What Products Do You Offer??"}
              answer={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
              }
            />
            <FaqQuestion
              layout
              question={"Different Payment Methods"}
              answer={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
              }
            />
            <FaqQuestion
              layout
              question={"Daily Schedule"}
              answer={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
              }
            />
          </AnimateSharedLayout>
        </div>
      </div>
    </motion.div>
  );
}
