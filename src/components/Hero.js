// AnimatedCounter.jsx
import React, { useState, useEffect } from 'react';
import about_dot from '../assets/images/shape/about-dot.png'
import dot_shape_circle from '../assets/images/shape/dot-shape-circle.png'
const Hero = ({ counters }) => {
  return (
   <section id="home" className="main-hero-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12 col-sm-12">
				<div className="hero-content rmb-25 wow fadeInUp delay-0-2s text-center">
                        <h2>Hi! 👋 My name is Aleem Akhtar</h2>
                        <h1>UX / UX, <span>Shopify, WordPress, React, Magento UI</span> Developer</h1>
                        <div className="dot-shape">
							<img src={about_dot} alt="Shape" />
                        </div>
                        <div className="dot-shape2">
                            <img src={dot_shape_circle} alt="Shape" />
                        </div>
                        <div className="hero-btns">
                            <a href="mailto:aleemakhtar57@gmail.com" className="theme-btn">Hire Me <i className="far fa-angle-right"></i></a>
                        </div>
                    </div>
				<div class="hero-counter-area d-flex justify-content-around wow fadeInUp delay-0-4s">
      {counters.map((counterConfig, index) => (
        <SingleCounter key={index} {...counterConfig} />
      ))}</div> 
				</div>
            </div>
        </div>
    </section>
	
  );
};

const SingleCounter = ({ label, minValue, maxValue, counttext }) => {
  const [count, setCount] = useState(minValue);

  useEffect(() => {
    if (count < maxValue) {
      // Update the counter every second (you can adjust the interval)
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount < maxValue ? prevCount + 1 : prevCount));
      }, 200);

      // Cleanup the interval when the component is unmounted or count reaches the maximum value
      return () => {
        clearInterval(interval);
      };
    }
  }, [count, maxValue]);

  return (
    <div className="counter-item counter-text-wrap">
      <span className="count-text">{count} {counttext}</span><span className="counter-title">{label}</span> 
    </div>
  );
  
};

export default Hero;
