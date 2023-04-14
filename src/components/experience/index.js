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
              <p className="quote">“Coming into VDA, I had some experience with design but not on Figma and Illustrator. VDA allowed me to have the space to learn, experiment, and get feedback. Through the tutorials...resources, and Zoom calls with mentors, I felt like I was able to make tremendous progress and learn so much.”</p>
              <h5 className="quote-name">Ellie Chen, 1st year</h5>
            </div>
          </div>
          <img alttext="Image of Students at a VDA Meeting" src={exp1} />

        </div>
        
        <img alttext="VDA Group Photo" className='section-2' src={exp2} />
        
        <div className='section-3'>
          <img alttext="Somi Somi Social" className="section-3-left" src={exp3} /> 
          <div className="section-3-right">
            <img alttext="Image of VDA Meeting" id="top" src={exp4} />
            <div id="bottom">
              <p>“[VDA] helped me to actually do assignments that were interesting to me, [and I] learned how to do professional work outside of the basic hs work.”</p>
              <h5>Leyna Pham, 1st year</h5>
            </div>  
          </div>
        </div>
        <div className="section-4">
          <div id='left'>
            <p>“My biggest takeaway was definitely being guided through these applications. It helped me shorten my learning curve by a lot by being able to ask questions and learn from the tutorials.”</p>
            <h5 className='quote-name'>Jeana Yoon, 2nd year</h5>
          </div>
          <img alttext="Two VDA Students enjoying class." className="section-4-right" src={exp5} />
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