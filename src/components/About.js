import React from "react";
import about from '../assets/images/about/about1.jpg'
import about_dot from '../assets/images/shape/about-dot.png'
const About = () => {
  return (
       
    <section id="about" className="about-area">
        <div className="container">
            <div className="row gap-100 align-items-center">
                <div className="col-lg-5">
                    <div className="about-image-part wow fadeInUp delay-0-3s">
                        <img src={about} alt="About Me" />
                        <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                            <h6>Available for Work</h6>
                            <div className="circle pulse color-pulse"></div>
                        </div>
                        <div className="dot-shape">
                            <img src={about_dot} alt="Shape" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-content-part rel z-2 rmb-55">
                        <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                            <span className="sub-title mb-15">About Me</span>
                            <h2>Around 11+ years of experience in developing User Interfaces for Mobile/Tablet/Desktop using <span>HTML, CSS, JavaScript, jQuery, Bootstrap, Elementor</span>.
                            </h2>
                            <p>Experience in Web Portal Websites and design for private client and industrial website use. Designed many web portal websites from scratch.
                            </p>
                        </div>
                        <ul className="list-style-one one-column wow fadeInUp delay-0-2s">
                          <li><span>Web Technologies:</span> HTML5, CSS3, Bootstrap, jQuery, JavaScript, Responsive website</li>
							<li><span>JS Frameworks:</span> React</li>
							<li><span>Graphic Tools:</span> Adobe Photoshop, Figma, Sketch, Invision</li>
							<li><span>IDE:</span> Notepad++, Visual Studio, Dreamweaver</li>
							<li><span>Version Control System:</span> GIT</li>
							<li><span>CMS:</span> WordPress, Shopify, Magento (Theming)</li>
							<li><span>Operating Systems:</span> Windows, Linux</li>
							<li>UI Design, User Flow, Wireframe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
  );
}

export default About;
