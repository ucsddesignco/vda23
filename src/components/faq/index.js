import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import x from "../../assets/images/faq/+.png";
import plus from "../../assets/images/faq/x.png";
import bulletpoint from "../../assets/images/faq/tablebullet.png";
import check from '../../assets/images/faq/check.png';


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
        <div className="accordian-cell" onClick={handleOpen1}>
          <div className="accordian-header norm">
            <h4 className="one">Who can apply?</h4>
            <div className="sign">{show1 ? <img src={plus} className="signs"/> : <img src={x} className="signs" /> }</div>
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
        <div className="accordian-cell"onClick={handleOpen2}>
          <div className="accordian-header norm">
            <h4 className="one">What is the time commitment?</h4>
            <div className="sign">{show2 ? <img src={plus} className="signs"/> : <img src={x} className="signs" /> }</div>          </div>
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
        <div className="accordian-cell" onClick={handleOpen3}>
          <div className="accordian-header long">
            <h4 className="two">How many students will be accepted?</h4>
            <div className="sign">{show3 ? <img src={plus} className="signs"/> : <img src={x} className="signs" /> }</div>          </div>
          {show3 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">Because this is a pilot program and Design Co’s first time creating a visual-focused program, around 60 UCSD students will be accepted, depending on the number of applicants. We’re excited to see the amount of interest in VDA and want to launch the program with a smaller class of apprentices to match our bandwidth and resources.</p>
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell" onClick={handleOpen4}>
          <div className="accordian-header long">
            <h4 className="two">How will apprentices be admitted?</h4>
            <div className="sign">{show4 ? <img src={plus} className="signs"/> : <img src={x} className="signs" /> }</div>          </div>
          {show4 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">The VDA mentors will review each application holistically and take all responses into account. We will admit a mixture of experience levels, but overall, we are looking for individuals who are eager to learn and will be committed to the program!</p>
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell" onClick={handleOpen5}>
          <div className="accordian-header long">
            <h4 className="two">What happens if I don’t get into VDA?</h4>
            <div className="sign">{show5 ? <img src={plus} className="signs"/> : <img src={x} className="signs" /> }</div>         
          </div>
          {show5 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">If you do not get into VDA, please don’t be discouraged! We will make our prompt list publicly available on this website if you want to follow along.</p>
                <div className="tablemobile">
                  <div className="tableheadmobile">
                    <h5>What you will get access to</h5>
                  </div>  
                  <div className="vdaheadmobile">
                    <h5>VDA Apprentices</h5>
                  </div>
                  <div className="contcontain">
                    <div className="vdacontmobile">
                      <div className="cell one">
                        <img src={bulletpoint} />
                        <p>Assignment prompts</p>
                      </div>
                      <div className="cell two">
                        <img src={bulletpoint} />
                        <p>Online resources/tutorials (on the VDA website)</p>
                      </div>
                      <div className="cell three">
                        <img src={bulletpoint} />
                        <p>In-person all-hands meetings (tutorials, critique sessions, work sessions)</p>
                      </div>
                      <div className="cell four">
                        <img src={bulletpoint} />
                        <p>VDA Discord community with the opportunity to get feedback from VDA organizers & peers</p>
                      </div>
                      <div className="cell five">
                        <img src={bulletpoint} />
                        <p>Opportunity to get paired with 1- 3 other accountability buddies</p>
                      </div>
                      <div className="cell final">
                        <img src={bulletpoint} />
                        <p>Featured in the final showcase/VDA website</p>
                      </div>
                    </div>
                  </div>
                  <div className="nonvdaheadmobile">
                    <h5>Non-VDA Students</h5>
                  </div>
                  <div className="contcontain2">
                    <div className="nonvdacontmobile">
                      <div className="cell one">
                        <img src={bulletpoint} />
                        <p>Assignment prompts</p>
                      </div>
                      <div className="cell final two">
                        <img src={bulletpoint} />
                        <p>Online resources/tutorials (on the VDA website)</p>
                      </div>
                    </div>
                  </div>
                <div>
              </div>
            <div>
            </div>
              </div>
              <div className="gridwrap">
                <div class="grid-container">
                  <div className="columnone">
                    <div class="grid-item one">
                      <h5>What you will get access to</h5>
                    </div>
                    <div class="grid-item">
                      <p>Assignment Prompts</p>
                    </div>
                    <div class="grid-item">
                      <p>Online resources/tutorials (on the VDA website)</p>
                    </div>
                    <div class="grid-item">
                      <p>In-person all-hands meetings (tutorials, critique sessions, work sessions)</p>
                    </div>
                    <div class="grid-item">
                      <p>VDA Discord community with the opportunity to get feedback from VDA organizers & peers</p>
                    </div>
                    <div class="grid-item">
                      <p>Opportunity to get paired with 1- 3 other accountability buddies</p>
                    </div>
                    <div class="grid-item">
                      <p>Featured in the final showcase/VDA website</p>
                    </div>
                  </div>
                  <div className="columntwo">
                    <div class="grid-item two">
                      <h5>VDA Apprentices</h5>
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                  </div>
                  <div className="columnthree">
                    <div class="grid-item three">
                      <h5>Non-VDA Students</h5>
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">
                      <img src={check} />
                    </div>
                    <div class="grid-item">

                    </div>
                    <div class="grid-item">

                    </div>
                    <div class="grid-item">

                    </div>
                    <div class="grid-item">

                    </div>
                  </div>
                </div>

              </div>
            </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
        <div className="accordian-cell" onClick={handleOpen6}>
          <div className="accordian-header norm">
            <h4 className="one">When is the application due?</h4>
            <div className="sign">{show6 ? <img src={plus} className="signs"/> : <img src={x} className="signs" /> }</div>          </div>
          {show6 && (
            <div className="accordian-body">
              <div className="textbox">
                <p className="content">The application is due Saturday, January 14 @ 11:59pm PST. Applicants will receive an email about their application status by the end of Week 2 of WI23.</p>
              </div>
            </div>
            
          )}
        </div>
        <div className="divider"></div>
      </div>
    </div>

  )
}

export default FAQ;