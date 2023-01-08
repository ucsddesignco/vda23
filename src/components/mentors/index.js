import React, { useState } from 'react'
import './styles.scss'

import Modal from '../modal'

import Symbol1 from '../../assets/images/program/symbol1.png'
import Symbol2 from '../../assets/images/program/symbol2.png'
import Symbol3 from '../../assets/images/program/symbol3.png'
import Symbol4 from '../../assets/images/program/symbol4.png'
import Symbol5 from '../../assets/images/program/symbol5.png'
import Symbol6 from '../../assets/images/program/symbol6.png'
import Symbol7 from '../../assets/images/program/symbol7.png'

function Mentors() {

    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(-1);
    
    const hideModal = () => {
        setShowModal(false);
    };

    const display = (value) => {
        setIndex(value);
        setShowModal(true);
    }

  return (
    <div className='mentors'>
        <h2>MEET THE MENTORS</h2>
        <p>
            Mentors will teach fundamental techniques and will serve as a resource 
            for those who want feedback on their assignments & iterations.
        </p>
        <div className="mentors-container">
            <div onClick={() => display(0)} className="box green">
                <img className='symbol-left' src={Symbol1} alt="" />
                <p>Megan</p>
            </div>
            <div onClick={() => display(1)} className="box orange">
                <img className='symbol-midleft' src={Symbol2} alt="" />
                <p>Juna</p>
            </div>
            <div onClick={() => display(2)} className="box pink">
                <img src={Symbol3} alt="" />
                <p>Thoa</p>
            </div>
            <div onClick={() => display(3)} className="box green small">
                <img className='symbol-midright' src={Symbol4} alt="" />
                <p>Ricky</p>
            </div>
        </div>
        <div className="mentors-container connect">
            <div onClick={() => display(4)} className="box pink">
                <img className='symbol-newleft' src={Symbol5} alt="" />
                <p>Leann</p>
            </div>
            <div onClick={() => display(5)} className="box green small">
                <img className='symbol-right' src={Symbol6} alt="" />
                <p>Meshach</p>
            </div>
            <div onClick={() => display(6)} className="box orange small">
                <img className='symbol-midright' src={Symbol7} alt="" />
                <p>Sabrina</p>
            </div>
        </div>

        <Modal
            show={showModal}
            onHide={() => {hideModal()}} 
            index={index} 
        />   

    </div>
  )
}

export default Mentors