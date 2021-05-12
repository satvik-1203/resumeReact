import React from "react";
import FaqQuestion from "./FaqQuestion";

export default function FaqSection() {
  return (
    <div>
      <div className="faqSection">
        <div className="questions">
          <div className="faqHeading">
            Any Questions?
            <div>
              <span>FAQ</span>
            </div>
          </div>
          <FaqQuestion
            question={"How Do I Start?"}
            answer={
              "Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Ipsa, impedit"
            }
          />
          <FaqQuestion
            question={"What Products Do You Offer??"}
            answer={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit"
            }
          />
          <FaqQuestion
            question={"Different Payment Methods"}
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
