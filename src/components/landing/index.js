import React from 'react';
import DesignCo from '../../assets/images/home/dco-logo.png';
import VDA from '../../assets/images/home/vda-black.png';
import Green from '../../assets/images/home/green-blob.png';
import BlackStar from '../../assets/images/home/star-black.png';
import WhiteStar from '../../assets/images/home/star-white.png';
import {motion} from 'framer-motion'
import './styles.scss';

function Landing({description, button=null}) {

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
                <div className='grid-child-text-inner'>
                <p className='justify'>
                    {description}
                </p>
                {button}
                </div>
            </div>

            <div className='grid-child-img'>
                <img className='green-blob' src={Green}/>
            </div>

        </div>

    </div>
  )
}

export default Landing;