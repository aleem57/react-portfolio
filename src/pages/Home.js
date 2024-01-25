import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
const Home = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
	const counters = [
    { label: 'Years Of Experience', minValue: 0, maxValue: 11, counttext: '+' },
    { label: 'Complete Projects', minValue: 0, maxValue: 250, counttext: '+' }, 
	{ label: 'Client Satisfactions', minValue: 0, maxValue: 99, counttext: '%' },
    // Add more counter configurations as needed
  ];
  return (
    <main>
	  <Hero counters={counters} />	 
	  <About />
	  <Resume />
	  <Services />
	  <Skills />
	  <Works />
	  <Contact />
    </main>
  );
}

export default Home;
