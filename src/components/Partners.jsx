import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../images/one.png';
import img2 from '../images/two.png';
import img3 from '../images/three.png';
import img4 from '../images/four.png';
import img5 from '../images/five.png';
import img6 from '../images/six.png';
import img7 from '../images/seven.png';
import img8 from '../images/eight.png';
import img9 from '../images/nine.png';
import img10 from '../images/ten.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';


import './Partner.css';

function Partner() {
  return (
    <>
    <hr />
    <div className="App mt-5">
      <div className="title">
        <h1>Our Technology Partner</h1>
      </div>

      <div className='container'>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
    
    <div className='container'>
        <Marquee direction="left" speed={100} delay={5} gradientColor={[255,255,255]}>
          <div className="image_wrapper">
            <img src={img11} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img12} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img13} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img14} alt="" />
          </div>
          <div>
            <img src={img15} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img16} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img17} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
    </div>
    </>
    );
}

export default Partner;
