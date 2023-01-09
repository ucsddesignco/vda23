import React from 'react'
import './styles.scss'

import Star from '../../assets/images/whitestar.svg';

function Timeline() {
  return (
    <div className='timeline'>
        <div className="pink">
            <p>Phase 1: Short Exercises</p>
        </div>
        <div className="block">
            <div className="orange">
                <h3>Week 1</h3>
                <p>
                    Week 3 of Winter <br></br> 
                    1/23 - 1/29
                </p>
            </div>
            <div className="black first">
                <h4>Pre-A1: Intro Card Graphic – 1 day</h4>
                <p>Due Fri, Jan 27 @ 11:59pm</p>
                <h4>A1: Create a Logo – 1 week</h4>
                <p>Due Fri, Feb 3 @ 11:59pm</p>
            </div>
            <div className="orange">
                <h3>Week 2</h3>
                <p>
                    Week 4 of Winter <br />
                    1/30 - 2/5
                </p>
            </div>
            <div className="black">
                <h4>A2: Intro to UI Design – 1 week</h4>
                <p>Due Fri, Feb 10 @ 11:59pm</p>
                <h4 className='due'>A1 Due</h4>
            </div>
        </div>
        <div className="pink">
            <p>Phase 2: Breadth</p>
        </div>
        <div className="block">
            <div className="orange">
                <h3>Week 3</h3>
                <p>
                    Week 5 of Winter<br />
                    2/6 - 2/12
                </p>
            </div>
            <div className="black first">
                <h4>A3: Social media graphics for a music festival – 2 weeks</h4>
                <p>Due Fri, Feb 24 @ 11:59pm</p>
                <h4 className='due'>A2 Due</h4>
            </div>
            <div className="orange">
                <h3>Week 4</h3>
                <p>
                    Week 7 of Winter <br />
                    2/20 - 2/26
                </p>
            </div>
            <div className="black">
                <h4>A4: Merch Design – 2 weeks</h4>
                <p>Due Fri, Mar 10 @ 11:59pm</p>
                <h4 className='due'>A3 Due</h4>
            </div>
        </div>
        <div className="pink">
            <p>Phase 3: Branding</p>
        </div>
        <div className="block">
            <div className="orange">
                <h3>Week 7</h3>
                <p>
                    Week 9 of Winter <br />
                    3/6 - 3/12
                </p>
            </div>
            <div className="black first">
                <h4>FINAL Part 1 (F1): Brand Identity – 3 weeks</h4>
                <h5>F1.1: Pre-brand</h5>
                <div className="bullet">
                    <img src={Star} alt="" />
                    <p>Research/competitive analysis, Moodboard, Branding/Style Guide Draft</p>
                </div>
                <div className="bullet">
                    <img src={Star} alt="" />
                    <p>Due Fri, Mar 17 @ 11:59pm</p>
                </div>
                <h5>F1.2: Finalizing the brand</h5>
                <div className="bullet">
                    <img src={Star} alt="" />
                    <p>Logo, Style guide, Mockup of logo on product</p>
                </div>
                <div className="bullet">
                    <img src={Star} alt="" />
                    <p>Due Fri, Mar 24 @ 11:59pm</p>
                </div>
                <h5>F1.3: Brand Graphics</h5>
                <div className="bullet">
                    <img src={Star} alt="" />
                    <p>Create an ad (OOH, poster, or social media) with the product/logo, and mock it up!</p>
                </div>
                <div className="bullet">
                    <img src={Star} alt="" />
                    <p>Due Sat, Apr 1 @ 11:59pm</p>
                </div>
                <h4 className='due'>A2 Due</h4>
            </div>
            <div className="orange">
                <h3>Week 8</h3>
                <p>
                    Week 10 of Winter <br />
                    3/13 - 3/19
                </p>
            </div>
            <div className="black">
                <h4 className='due'>F1.1 Due</h4>
            </div>
            <div className="orange">
                <h3>Week 9</h3>
                <p>
                    Finals Week of Winter <br />
                    3/13 - 3/19
                </p>
            </div>
            <div className="black">
                <h4 className='due'>F1.2 Due</h4>
            </div>
            <div className="orange">
                <h3>Week 10</h3>
                <p>
                    Spring Break <br />
                    3/27 - 4/2
                </p>
            </div>
            <div className="black">
                <h4>FINAL Part 2 (F2): Brand Case Study – 2 weeks</h4>
                <p>Due Sat, Apr 8 @ 11:59pm</p>
                <h4 className='due'>F1.3 Due (Sat)</h4>
            </div>
            <div className="orange">
                <h3>Week 11</h3>
                <p>
                    Week 1 of Spring <br />
                    4/3 - 4/9
                </p>
            </div>
            <div className="black">
                <h4>FINAL Part 3 (F3): Final Showcase Assignment – 1 week</h4>
                <p>Due Thurs, Apr 13 @ 11:59pm</p>
                <h4 className='due'>F2 Due (Sat)</h4>
            </div>
            <div className="orange">
                <h3>Week 12</h3>
                <p>
                    Week 2 of Spring <br />
                    4/10 - 4/14
                </p>
            </div>
            <div className="lastblack">
                <div className="black">
                    <h4 className='due'>F3 Due (Thurs)</h4>
                </div>
                <div className="green">
                    <h3>FINAL SHOWCASE Fri, April 14</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline