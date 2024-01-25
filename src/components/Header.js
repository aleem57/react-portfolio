import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logos/logo.png'
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 100 pixels (adjust as needed)
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = scrolled ? 'main-header menu-absolute fixed-header' : 'main-header menu-absolute';

  return (
    
    <header className={headerClass}>
        <div className="header-upper">
            <div className="container">
                <div className="header-inner d-flex align-items-center">
                    <div className="logo-outer">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="Logo" /></a>
                        </div>
                    </div>
                    <div className="nav-outer">
                        <nav className="main-menu navbar-expand-lg">
                            <div className="navbar-header">
                                <div className="mobile-logo my-15">
                                    <a href="#">
                                        <img src={logo} alt="Logo" title="Logo" />
                                    </a>
                                </div>
                                <button type="button" className="navbar-toggle me-4" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="navigation onepage clearfix">
                                    <li><a className="nav-link-click" href="#home">Home</a></li>
                                    <li><a className="nav-link-click" href="#about">about</a></li>
                                    <li><a className="nav-link-click" href="#resume">Resume</a></li>
                                    <li><a className="nav-link-click" href="#services">services</a></li>
                                    <li><a className="nav-link-click" href="#skills">skills</a></li>
                                    <li><a className="nav-link-click" href="#portfolio">projects</a></li>
                                    <li><a className="nav-link-click" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
   
  );
}

export default Header;
