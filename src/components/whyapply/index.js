import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";


//image imports
import squiggle from '../../assets/images/whyapply/squiggle-desktop.png';
import blob from '../../assets/images/whyapply/blob-desktop.png';
import sparkle from '../../assets/images/whyapply/sparkle-desktop.png';
import image from '../../assets/images/whyapply/whyapply.png';
import buttonstar from '../../assets/images/whyapply/buttonstar.png';
import squigglemobile from '../../assets/images/whyapply/squigglemobile.png';
import blobmobile from '../../assets/images/whyapply/blobmobile.png';
import starmobile from '../../assets/images/whyapply/starmobile.png';


function WhyApply() {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>WHY APPLY?</h1>
        <img src={image} className="img"></img>
      </div>
      <div className="threebox">
        <div className="box">
          <img src={squiggle} className="shapes one"/>
          <img src={squigglemobile} className="shapesmobile one" />
          <h4>Accountability</h4>
          <p>The structure of the program combined with the larger support of other apprentices will keep apprentices accountable in their learning journey.</p>
        </div>
        <div className="box">
          <img src={blob} className="shapes two"/>
          <img src={blobmobile} className="shapesmobile two" />
          <h4>In-person network</h4>
          <p>Unlike our previous project programs, the majority of the apprenticeship will be in-person!</p>
        </div>
        <div className="box">
          <img src={sparkle} className="shapes three"/>
          <img src={starmobile} className="shapesmobile three" />
          <h4>Expanded skillset</h4>
          <p>With the UX-and-STEM-heavy school curriculum lacking graphic design class options, this apprenticeship will provide the resources students need to jumpstart their visual design career!</p>
        </div>
      </div>
      <div className="buttoncont">
        <div className="buttoncont2">
          <a onClick={handleClick} className="button" href="https://forms.gle/2bnSgXW4Usddx6JP6" target='_blank'>
            <h4 className="text">APPLY</h4>
            <img src={buttonstar} className="buttonstar" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default WhyApply;