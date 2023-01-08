import React from 'react'
import './styles.scss'

import { MentorsList } from '../MentorsList'

import Cross from '../../assets/images/home/black-cross.svg'
import Profile from '../../assets/images/modal/Megan.png'
import Symbol from '../../assets/images/program/symbol1.png'

function Modal(props) {
    const idx = props.index;
    const current_team = MentorsList[idx];

  return (
    <div>
         {props.show && (
            <div className='modal-container'>
                <div className="background" onClick={props.onHide}>

                </div>
                <div className="modal">
                    <div className={`top ${current_team.color}`}>
                        <img className='profile' src={require(`../../assets/images/modal/${current_team.name}.png`)} alt="" />
                        <h2>{current_team.name}</h2>
                        <img onClick={props.onHide} className='cross' src={Cross} alt="" />
                    </div>
                    <div className="middle">
                        <h4>Has experience in</h4>
                        <p>{current_team.experience}</p>
                        <h4>Specialties</h4>
                        <p>{current_team.specialty}</p>
                        <h4>Talk to her about</h4>
                        <p className='text-small'>{current_team.fun}</p>
                    </div>
                    <img className={`symbol ${current_team.symbolStyling}`} src={require(`../../assets/images/program/symbol${current_team.symbol}.png`)} alt="" />
                </div>
            </div>
         )}
    </div>
  )
}

export default Modal