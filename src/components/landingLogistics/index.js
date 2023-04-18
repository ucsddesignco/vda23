import React from 'react';
import DesignCo from '../../assets/images/home/dco-logo.png';
import VDA from '../../assets/images/home/vda-black.png';
import Green from '../../assets/images/home/green-blob.png';
import BlackStar from '../../assets/images/home/star-black.png';
import WhiteStar from '../../assets/images/home/star-white.png';
import {motion} from 'framer-motion'
import './styles.scss';

function LandingLogistics() {

    const messagesArray = [
        {line: "12 weeks (Jan 23 - Apr 14, 2023)",},
        {line: "3-6 hr commitment per week",},
        {line: "Hands-on practice in visual design",},
        {line: "Peer feedback and support",}
    ];

    const messagesArray2 = [
        {line: "A few solid portfolio pieces + a brand case study that can be presented in interviews",},
        {line: "Experience working on brand identity, print design, UI design, social media graphics, and more",}
    ];

  return (
    <div className='landing'>

        <div className='grid-container2'>

            <div className='grid-child-orange2'>
                {messagesArray.map((message) => (
                    <div className='response-container'>
                        <img src={BlackStar} />
                        <p>{message.line}</p>
                    </div>
                ))}
            </div>

            <div className='grid-child-text'>
                <h3>
                    By the end of the program, apprentices will be equipped with:
                </h3>
                <div className='bottom-container'>
                    {messagesArray2.map((message) => (
                        <div className='response-container'>
                            <img src={WhiteStar} />
                            <p>{message.line}</p>
                        </div>
                    ))}                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingLogistics;