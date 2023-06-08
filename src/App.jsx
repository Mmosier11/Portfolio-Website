import React, { useCallback, } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';


import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import { motion, useScroll } from "framer-motion";
import {  Hero, Navbar } from './components';
import './App.scss';

import particlesSettings from './assets/json/particles';
import SelectedWorks from './components/SelectedWorks';
import OtherWorks from './components/OtherWorks';
import Credits from './components/Credits';

const App = () => {

  const { scrollYProgress } = useScroll();

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);

  return (
    <Router>
      <motion.div
        className="ProgressBar"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="relative z-0 bg-primary">
        <Navbar/>
        <div id="main-content" className='MainContent'>
          <div className="MainContent__SmoothProvider">  
            <div className='MainContent__Content'>
              {/* <span className='InProgress'> Site is in progress, working on Project links </span> */}
              <Particles 
                id="particles"
                options={particlesSettings}
                init={particlesInit} 
                loaded={particlesLoaded} 
              />
              <Hero/>
              <SelectedWorks/>            
              <OtherWorks/>
              <div className="Footer">
                <p className="Footer__Text"> 
                  <span className="Footer__Text__Name">Max Mosier</span> | 
                  <a 
                    href="https://www.linkedin.com/in/max-mosier/" 
                    target="_blank" 
                    className="Footer__Text__Link"
                  >
                    LINKEDIN
                  </a> &nbsp;
                  <a 
                    href="https://github.com/SenpaiSumpie" 
                    target="_blank" 
                    className="Footer__Text__Link"
                  >
                    GITHUB
                  </a> &nbsp; 
                  <a 
                    href="mailto:max.lee.mosier@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="Footer__Text__Link"
                  >
                    CONTACT
                  </a> &nbsp;
                </p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App
