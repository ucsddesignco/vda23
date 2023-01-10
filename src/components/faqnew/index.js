import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import x from "../../assets/images/faq/+.png";
import plus from "../../assets/images/faq/x.png";
import bulletpoint from "../../assets/images/faq/tablebullet.png";
import check from '../../assets/images/faq/check.png';
import Accordion from "../accordion";


function FAQNEW() {
  return (
    <div className="faq-page">
      <div className="faq-title">
        <h1>FAQ</h1>
      </div>
      <div className="accordian">
        <Accordion />
      </div>  
      
    </div>

  )
}

export default FAQNEW;