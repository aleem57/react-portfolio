import React from "react";
const Contact = () => {
  return (
   <section id="contact" className="contact-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content-part pt-5 rpt-0 rmb-25 wow fadeInUp delay-0-2s">
                        <div className="section-title mb-40 text-center">
                            <span className="sub-title mb-15">Contact me</span>
                            <h2>Let’s Talk About your <span>Next Projects</span></h2>
                            <p>I'm happy to connect, listen and help. Let's work together and build something awesome. Let's turn your idea to an even greater product.
                            </p>
                        </div>
                       <div className="row"> <div className="col">
                        
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i className="fa fa-phone-alt"></i>
                            </div>
                            <h2>contact number:</h2>
                            <p><a href="tel:+919582284886">+91 9582284886</a></p>
                        </div>    </div>
                        
                        
                       <div className="col"> <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h2>Email us:</h2>
                            <p><a href="mailto:aleemakhtar57@gmail.com">aleemakhtar57@gmail.com</a></p>
                        </div>  </div>
                        
                    </div>
					</div>
                </div>
          
            </div>
        </div>
    </section>
  
   
 
  );
}

export default Contact;
