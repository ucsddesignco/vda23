import React, { useState } from "react";
import FaqTable from "../faqtable";
import "./style.scss";
import bulletpoint from "../../assets/images/faq/tablebullet.png";
import check from '../../assets/images/faq/check.png';
import {Link} from "react-router-dom";


function Accordion() {
  const [faqs, setfaqs] = useState([
    {
      question: "Who can apply?",
      answer:
        <p className="textbody">Any UCSD student who is eager to learn visual/graphic/brand design. We encourage students of any major/year to apply, especially beginner designers who may not have had the resources to learn before!</p>,
      table: 
        <div className="none"></div>,
      
      open: false,
    },
    {
      question: "What is the time commitment?",
      answer:
      <div className="textbody">
        <p className="para1">Expect to spend around <span className='font'>3-6 hours per week</span> in VDA (i.e. 1-2 hrs mandatory semi-weekly all-hands meeting + 2-4 hrs of work). The work time will vary per person based on experience level, effort put into each assignment, and assignment prompt. Similar to classes, the work will build up throughout the duration of the program, so expect to spend more time during the latter half of the apprenticeship.</p>
        <p>VDA will run from <span className='font'>Week 3 of WI23 (1/23) to Week 2 of SPR23 (3/14),</span> including midterms season and finals week, so make sure you’ll be committed to this timeframe before applying. See the <Link to="/program-overview" className="link">assignment timeline</Link> for more details!</p>
      </div>,
      table: 
        <div className="none"></div>,
      open: false,
    },
    {
      question: "How many students will be accepted?",
      answer:
        <p className="textbody">Because this is a pilot program and Design Co’s first time creating a visual-focused program, around 60 UCSD students will be accepted, depending on the number of applicants. We’re excited to see the amount of interest in VDA and want to launch the program with a smaller class of apprentices to match our bandwidth and resources.</p>,
      open: false,
      table: 
        <div className="none"></div>,
    },
    {
      question: "How will apprentices be admitted?",
      answer:
        <p className="textbody">The VDA mentors will review each application holistically and take all responses into account. We will admit a mixture of experience levels, but overall, we are looking for individuals who are eager to learn and will be committed to the program!</p>,
      open: false,
      table: 
        <div className="none"></div>,
    },
    {
      question: "What happens if I don’t get into VDA?",
      answer:
        <p className="textbody">If you do not get into VDA, please don’t be discouraged! We will make our prompt list publicly available on this website if you want to follow along.</p>,
      open: false,
      table: 
          <div class="table">
            <div className="tablemobile">
              <div className="tableheadmobile">
                <h4>What you will get access to</h4>
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
                  <div className="contcontain3">
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
                <div className="none">
               </div>
              <div className="none">
            </div>
          </div>
          <div class="grid-cont">
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
    },
    {
      question: "When is the application due?",
      answer:
        <p className="textbody">The application is due Sunday, January 15 @ 11:59pm PST. Applicants will receive an email about their application status by the end of Week 2 of WI23.</p>,
      open: false,
      table: 
        <div className="none"></div>,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  return (
    <div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqTable faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
