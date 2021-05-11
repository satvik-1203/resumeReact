import React from "react";
import FaqQuestion from "./FaqQuestion";

export default function FaqSection() {
  return (
    <div>
      <div className="faqSection">
        <div className="faqHeading">
          Any Questions?<div>FAQ</div>
        </div>
        <div className="questions">
          <FaqQuestion
            question={"How Do I Start?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
            }
          />
          <FaqQuestion
            question={"What Products Do You Offer??"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
            }
          />
          <FaqQuestion
            question={"How Do I start?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
            }
          />
          <FaqQuestion
            question={"Daily Schedule"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
            }
          />
        </div>
      </div>
    </div>
  );
}
