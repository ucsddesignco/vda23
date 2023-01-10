import React from "react";
import './style.scss';

function FaqTable({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question"><p>{faq.question}</p></div>
      <div className="faq-answer">
        {faq.answer}
        {faq.table}
      </div>
      
    </div>
  );
}

export default FaqTable;
