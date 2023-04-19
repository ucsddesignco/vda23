import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import exp1 from "../../assets/images/experience/exp1.jpg"
import exp2 from "../../assets/images/experience/exp2.jpg"
import exp3 from "../../assets/images/experience/exp3.jpg"
import exp4 from "../../assets/images/experience/exp4.jpg"
import exp5 from "../../assets/images/experience/exp5.jpg"

import symbol1 from "../../assets/images/program/symbol1.png"
import symbol2 from "../../assets/images/program/symbol2.png"
import symbol3 from "../../assets/images/program/symbol3.png"
import symbol4 from "../../assets/images/program/symbol4.png"
import symbol5 from "../../assets/images/program/symbol5.png"
import symbol6 from "../../assets/images/program/symbol6.png"
import symbol7 from "../../assets/images/program/symbol7.png"
import Star from "../../assets/images/program/star.svg"

function Experience({apprenticeRef}) {
  return (
    <div ref={apprenticeRef} className='experience'>
      <div className='desktop-experience'>
        <h2>APPRENTICE EXPERIENCE</h2>
        <div className="apprentice-container">
          <div className="section-1">
            <div className="section-1-left">
              <div id="top">
                <img className='symbol section-1-symbol4' src={symbol4} alt="" />
                <h4>From Apprentice to Master: The VDA 2023 Experience</h4> 
                <a target='_blank' href='https://medium.com/@ucsddesignco/from-apprentice-to-master-the-vda-2023-experience-e19c946f7de'>Read about the VDA experience here</a>
              </div>
              <div id="bottom">
                <p className="quote">“Coming into VDA, I had some experience with design but not on Figma and Illustrator. VDA allowed me to have the space to learn, experiment, and get feedback. Through the tutorials...resources, and Zoom calls with mentors, I felt like I was able to make tremendous progress and learn so much.”</p>
                <h5 className="quote-name">Ellie Chen, 1st year</h5>
              </div>
            </div>
            <img alt="Image of Students at a VDA Meeting" src={exp1} />

          </div>
          <div className="section-2">
            <img className='symbol section-2-symbol3' src={symbol3} alt="" />
            <img alt="VDA Group Photo" className='section-2-photo' src={exp2} />
          </div>
          
          <div className='section-3'>
            <img className='symbol section-3-symbol6' src={symbol6} alt="" />
            <img className='symbol section-3-symbol7' src={symbol7} alt="" />
            <img alt="Somi Somi Social" className="section-3-left" src={exp3} /> 
            <div className="section-3-right">
              <img alt="Image of VDA Meeting" id="top" src={exp4} />
              <div id="bottom">
                <p>“I learned a lot of Adobe Illustrator skills. I was terrified of it before, but I'm so much more familiar with it now. Now that the fear is gone, I can grow at a faster pace.”</p>
                <h5 className='quote-name'>Tina Sohrabi, 5th year</h5>
              </div>  
            </div>
          </div>
          <div className="section-4">
            <img className='symbol section-4-symbol1' src={symbol1} alt="" />
            <img className='symbol section-4-symbol2' src={symbol2} alt="" />
            <div id='left'>
              <p>“VDA was overall an extremely fun, rewarding, and educational experience! If/when there's recruitment for a new cohort next year I'd recommend it 11/10 to anyone who's passionate about learning visual design, regardless of experience level. You can tell the mentors truly care about all the apprentices in the program and feel them cheering you on along the way.”</p>
              <h5 className='quote-name'>Katie Bonilla, 3rd year</h5>
            </div>
            <img alt="Two VDA Students enjoying class." className="section-4-right" src={exp5} />
          </div>
          
          <div className="pinkbar" />
        </div>

        <div className='learn-more-container'>
          <h4>Learn more about the VDA program below!</h4>
          <Link className="link" to="/about">
            <button type="button" className='learn-more-button'>
              <p>LEARN MORE</p>
              <img src={Star} alt="" />
            </button>
          </Link>
        </div>

      </div>
      <div className='mobile-cont'>
        <div className="mobile-experience">
          <h2>APPRENTICE EXPERIENCE</h2>
          <img className='symbol symbol1' src={symbol4} alt="" />
          <div className="section-one">
            <h4 className='header-text'>From Apprentice to Master: The VDA 2023 Experience</h4> 
            <a target='_blank' href='https://medium.com/@ucsddesignco/from-apprentice-to-master-the-vda-2023-experience-e19c946f7de'>Read full article</a>
          </div>
          <div className="quote">
            <p>“Coming into VDA, I had some experience with design but not on Figma and Illustrator. VDA allowed me to have the space to learn, experiment, and get feedback. Through the tutorials...resources, and Zoom calls with mentors, I felt like I was able to make tremendous progress and learn so much.”</p>
            <h5 className="quote-name">Ellie Chen, 1st year</h5>
          </div>
          <img alt="VDA Group Photo" className='section-2-photo' src={exp2} />
          <div className='shapes'>
            <img className='symbol symbol2' src={symbol2} alt="" />
            <img className='symbol symbol3' src={symbol5} alt="" />
          </div>
          <img alt="Image of Students at a VDA Meeting" src={exp1} />
          <div className='shapes'>
            <img className='symbol symbol4' src={symbol6} alt="" />
          </div>
          <img alt="Somi Somi Social" className="section-3-left" src={exp3} /> 
          <div className='shapes'>
            <img className='symbol symbol5' src={symbol3} alt="" />
          </div>
          <div className="quote">
            <p id="tina">“I learned a lot of Adobe Illustrator skills. I was terrified of it before, but I'm so much more familiar with it now. Now that the fear is gone, I can grow at a faster pace.”</p>
            <h5 className='quote-name'>Tina Sohrabi, 5th year</h5>
          </div>  
          <div className='shapes'>
            <img className='symbol symbol6' src={symbol1} alt="" />
          </div>
          <img alt="Image of VDA Meeting" id="top" src={exp4} />
          <img alt="Two VDA Students enjoying class." className="section-4-right" src={exp5} />
          <div className='shapes'>
            <img className='symbol symbol7' src={symbol7} alt="" />
          </div>
          <div className='quote three' >
            <p>“VDA was overall an extremely fun, rewarding, and educational experience! If/when there's recruitment for a new cohort next year I'd recommend it 11/10 to anyone who's passionate about learning visual design, regardless of experience level. You can tell the mentors truly care about all the apprentices in the program and feel them cheering you on along the way.”</p>
            <h5 className='quote-name'>Katie Bonilla, 3rd year</h5>
          </div>
        </div>
        <div className="pinkbar" />
        <div className='learn-more-container'>
          <h4>Learn more about the VDA program below!</h4>
          <Link className="link" to="/about">
            <button type="button" className='learn-more-button'>
              <p>LEARN MORE</p>
              <img src={Star} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>  
  )
}

export default Experience