import React, { useEffect, useRef } from 'react';
import { Route, Routes } from "react-router-dom";
import $ from 'jquery';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/spacing.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/animate.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import WOW from 'wowjs';
import 'animate.css';
import 'wowjs/css/libs/animate.css';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
	  
    </div>
  );
}

export default App;
