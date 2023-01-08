import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import icon from "../../assets/images/faq/+.png"


function FAQ() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  
  const handleOpen1 = () => {
    setShow1(!show1); // Toggle accordion
  };
  const handleOpen2 = () => {
    setShow2(!show2); // Toggle accordion
  };
  const handleOpen3 = () => {
    setShow3(!show3); // Toggle accordion
  };
  const handleOpen4 = () => {
    setShow4(!show4); // Toggle accordion
  };
  const handleOpen5 = () => {
    setShow5(!show5); // Toggle accordion
  };
  const handleOpen6 = () => {
    setShow6(!show6); // Toggle accordion
  };



  

  return (
    <div className="faq-page">
      <div className="faq-title">
        <h1>FAQ</h1>
      </div>
      <div className="faq-accordian">
        <div className="accordian-cell">
          <div className="accordian-header norm" onClick={handleOpen1}>
            <h4>Who can apply?</h4>
            <div className="sign">{show1 ? 'x' : '+'}</div>
          </div>
          {show1 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">Any UCSD student who is eager to learn visual/graphic/brand design. We encourage students of any major/year to apply, especially beginner designers who may not have had the resources to learn before!</p>
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell">
          <div className="accordian-header norm" onClick={handleOpen2}>
            <h4>What is the time commitment?</h4>
            <div className="sign">{show2 ? 'x' : '+'}</div>
          </div>
          {show2 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content para-1">Expect to spend around 3-6 hours per week in VDA (i.e. 1-2 hrs mandatory semi-weekly all-hands meeting + 2-4 hrs of work). The work time will vary per person based on experience level, effort put into each assignment, and assignment prompt. Similar to classes, the work will build up throughout the duration of the program, so expect to spend more time during the latter half of the apprenticeship.</p>
                <p className="content">VDA will run from Week 3 of WI23 (1/23) to Week 2 of SPR23 (3/14), including midterms season and finals week, so make sure you’ll be committed to this timeframe before applying. See the assignment timeline for more details!</p>
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell">
          <div className="accordian-header long" onClick={handleOpen3}>
            <h4>How many students will be accepted?</h4>
            <div className="sign">{show3 ? 'x' : '+'}</div>
          </div>
          {show3 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">Because this is a pilot program and Design Co’s first time creating a visual-focused program, around 60 UCSD students will be accepted, depending on the number of applicants. We’re excited to see the amount of interest in VDA and want to launch the program with a smaller class of apprentices to match our bandwidth and resources.</p>
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell">
          <div className="accordian-header long" onClick={handleOpen4}>
            <h4>How will apprentices be admitted?</h4>
            <div className="sign">{show4 ? 'x' : '+'}</div>
          </div>
          {show4 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">The VDA mentors will review each application holistically and take all responses into account. We will admit a mixture of experience levels, but overall, we are looking for individuals who are eager to learn and will be committed to the program!</p>
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell">
          <div className="accordian-header long" onClick={handleOpen5}>
            <h4>What happens if I don’t get into VDA?</h4>
            <div className="sign">{show5 ? 'x' : '+'}</div>
          </div>
          {show5 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">If you do not get into VDA, please don’t be discouraged! We will make our prompt list publicly available on this website if you want to follow along.</p>
                <table-mobile />
                <table-desktop />
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell">
          <div className="accordian-header norm" onClick={handleOpen6}>
            <h4>When is the application due?</h4>
            <div className="sign">{show6 ? 'x' : '+'}</div>
          </div>
          {show6 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">The application is due Saturday, January 14 @ 11:59pm PST. Applicants will receive an email about their application status by the end of Week 2 of WI23.</p>
              </div>
            </div>
            
          )}
        </div>
      </div>
    </div>

  )
}

export default FAQ;