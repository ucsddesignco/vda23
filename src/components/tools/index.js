import React from 'react'
import './styles.scss'

import Graphic from '../../assets/images/program/blackpink-dco.png'

function Tools() {
  return (
    <div className='tools'>
        <div className='grid-container2'>
            <div className='grid-child-text'>
                <h2>TOOLS</h2>
                <p className='justify'>
                We'll mainly be working with Adobe Illustrator, Photoshop, and Figma. 
                It’s possible (but not recommended) to go without Adobe for this 
                program, as Figma has limited capabilities for graphic design. We also 
                recommend using Adobe if you want to learn about industry standard 
                graphic design techniques. <br /><br />
                Other recommended tools: Pencil/sketchbook/paper or iPad for 
                sketching.
                </p>
            </div>
            <div className='grid-child-img'>
                <img className='pink-blob' src={Graphic}/>
            </div>
        </div>
    </div>
  )
}

export default Tools