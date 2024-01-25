import React from "react";
import ui_ux from '../assets/images/skills/ui-ux.png'
import Website_Design from '../assets/images/skills/Website-Design.png'
import Logo_Branding from '../assets/images/skills/Logo-Branding.png'
import Dashboard_Design from '../assets/images/skills/Dashboard-Design.png'
import Landing_Page_Design from '../assets/images/skills/Landing-Page-Design.png'
import eCommerce_Website_Design from '../assets/images/skills/eCommerce-Website-Design.png'
const Services = () => {
  return (
  <section id="services" className="services-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                    <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                        <span className="sub-title mb-15">Services</span>
                        <h2>
                            My <span>Special Service</span> For your Website Development
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col-lg-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-2s">
                        <div className="content">
                           <img src={ui_ux} alt="" />
                            <h4>UI/UX Design</h4>
                            <p>To present the data in a consistent and organized manner, do you require a dashboard design, an admin panel UI, OR a UX Design</p>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-lg-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-4s">
                        <div className="content">
                            <img src={Website_Design} alt="" />
                            <h4>Website Design</h4>
                            <p>We go beyond the ordinary, covering every aspect of the design process to ensure your online presence not only meets but exceeds expectations.</p>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-lg-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-6s">
                        <div className="content">
                             <img src={Logo_Branding} alt="" />
                            <h4>Logo and Branding</h4>
                            <p> We create unique visual identities that capture your brand's essence, leaving a memorable mark in the minds of your audience.</p>
                        </div>
                    </div>
                </div>
                
				
                <div className="col-lg-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-2s">
                        <div className="content">
                               <img src={Dashboard_Design} alt="" />
                            <h4>Dashboard Design</h4>
                            <p>With the help of a deeper understanding of UI UX Design, I will create any type of dashboard design or multi-page dashboard page UI UX design.</p>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-lg-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-4s">
                        <div className="content">
                             <img src={Landing_Page_Design} alt="" />
                            <h4>Landing Page Design</h4>
                            <p>We specialize in delivering tailored solutions for businesses in need of a persuasive and conversion-centric landing page</p>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-lg-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-6s">
                        <div className="content">
                              <img src={eCommerce_Website_Design} alt="" />
                            <h4>eCommerce Website Design</h4>
                            <p>Ee specialize in elevating online businesses through exceptional eCommerce website design</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  
    
 
  );
}

export default Services;
