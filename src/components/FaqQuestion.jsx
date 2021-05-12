import React from "react";

export default function FaqQuestion({ question, answer }) {
  return (
    <div>
      <div className="faqQuestion">
        <h4 className="question">{question}</h4>
        <div className="answer">{answer}</div>
        <div className="line"></div>
      </div>
    </div>
  );
}
