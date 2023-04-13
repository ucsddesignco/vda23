import React from 'react';
import './styles.scss';

import exp1 from "../../assets/images/experience/exp1.jpg"
import exp2 from "../../assets/images/experience/exp2.jpg"
import exp3 from "../../assets/images/experience/exp3.jpg"
import exp4 from "../../assets/images/experience/exp4.jpg"
import exp5 from "../../assets/images/experience/exp5.jpg"


function Experience() {
  return (
    <div className='experience'>
      <h2>APPRENTICE EXPERIENCE</h2>
      <div className="apprentice-container">
        <div className="section-1">
          <div className="section-1-left">
            <div id="top">
              <h4>VDA: THE WAY OF VISUAL DESIGN</h4> 
              <a target='_blank' href='https://thumbs.dreamstime.com/b/capybara-business-suit-animal-businessman-funny-boss-capybara-headed-man-formal-business-suit-generative-ai-illustration-268259284.jpg'>Read more about the VDA experience here</a>
            </div>
            <div id="bottom">
              <p className="quote">“[VDA] helped me to actually do assignments that were interesting to me, [and I] learned how to do professional work outside of the basic hs work.”</p>
              <h5 className="quote-name">Leyna Pham, 1st year</h5>
            </div>
          </div>
          <img alttext="Image of Students at a VDA Meeting" src={exp1} />

        </div>
        
        <img alttext="VDA Group Photo" className='section-2' src={exp2} />
        
        <div className='section-3'>
          <div className="section-3-left">
            {/* <img src={exp3} /> */}
          </div>
          <div className="section-3-right">
            <div id="top">
              {/* <img src={exp4} /> */}
            </div>
            <div id="bottom">
              <p>“My biggest takeaway was definitely being guided through these applications. It helped me shorten my learning curve by a lot by being able to ask questions and learn from the tutorials.”</p>
              <h5>Jeana Yoon, 2nd year</h5>
            </div>  
          </div>
        </div>
        <div className="section-4">
          <div id='left'>
            <p>“insert quote insert quote insert quote ”</p>
            <h5 className='quote-name'>Insert name, insert year</h5>
          </div>
          <div className="section-4-right">
            {/* <img src={exp5} /> */}
          </div>
        </div>
        
        <div className="pinkbar" />
      </div>

      <div className='learn-more-container'>
        <h4>Learn more about the VDA program below!</h4>
        <button type="button" className='learn-more-button'></button>
      </div>

    </div>
  )
}

export default Experience