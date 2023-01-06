import React from 'react';
import DesignCo from '../../assets/images/home/dco-logo.png';
import VDA from '../../assets/images/home/vda-black.png';
import Green from '../../assets/images/home/green-blob.png';
import BlackStar from '../../assets/images/home/star-black.png';
import WhiteStar from '../../assets/images/home/star-white.png';
import {motion} from 'framer-motion'
import './styles.scss';

function Landing() {

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
        <div className='grid-container'>
            <div className='grid-child-pink'>
                <img className='dco-logo' src={DesignCo}/>
                <img className='vda-logo' src={VDA}/>
            </div>
            <div className='grid-child-orange'>
                <motion.p initial={{y:'0px'}} animate={{y:'-800px'}} transition={{duration: 12, ease: 'linear', repeat: 'Infinity'}} className='hero-title'>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    VISUAL BRAND GRAPHIC <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    VISUAL BRAND GRAPHIC <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    BRAND GRAPHIC VISUAL <br></br>                    
                    GRAPHIC VISUAL BRAND <br></br>
                    VISUAL BRAND GRAPHIC <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    BRAND GRAPHIC VISUAL <br></br>                    
                    GRAPHIC VISUAL BRAND <br></br>
                    VISUAL BRAND GRAPHIC <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    VISUAL BRAND GRAPHIC <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                    VISUAL BRAND GRAPHIC <br></br>
                    BRAND GRAPHIC VISUAL <br></br>
                    GRAPHIC VISUAL BRAND <br></br>
                </motion.p>
            </div>
        </div>
        <div className='grid-container2'>

            <div className='grid-child-text'>
                <h2>VISUAL DESIGN APPRENTICESHIP</h2>
                <p>
                    Design Co’s first ever Visual Design Apprenticeship is a 12-week long 
                    program where student designers will work on a variety of hands-on 
                    assignments focusing on visual, graphic, and brand design. <br></br><br></br>
                    Students will learn fundamental techniques in Adobe and Figma through 
                    in-person lessons and will have the opportunity to participate in 
                    critique sessions, work sessions, and accountability buddy groups! This 
                    is NOT a UX-based program.
                </p>
            </div>

            <div className='grid-child-img'>
                <img className='green-blob' src={Green}/>
            </div>

        </div>

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

export default Landing;