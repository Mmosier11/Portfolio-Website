import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Scrollama, Step } from 'react-scrollama';

import { SmoothProvider } from 'react-smooth-scrolling';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ExperimentalCover } from './components';
import './App.scss';

import particlesSettings from './assets/json/particles';
import SelectedWorks from './components/SelectedWorks';
import Test from './components/Test';
import OtherWorks from './components/OtherWorks';
import Credits from './components/Credits';
import AnimatedCursor from 'react-animated-cursor';

const App = () => {

  const { scrollYProgress } = useScroll();

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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
        <div className='fixed w-full'>
          
          <Hero/>
        </div> 
        
        <div id="main-content" className='MainContent'>
        
          <div className="MainContent__SmoothProvider">  
            <div className='MainContent__Content'>
              <Particles 
                id="particles"
                options={particlesSettings}
                init={particlesInit} 
                loaded={particlesLoaded} 
              />
              <SelectedWorks/>            
              <OtherWorks/>
              <Credits/>
              <div className="Footer">
                <p className="Footer__Text"> 
                  <span className="Footer__Text__Name">Max Mosier</span> | 
                  <a href="https://www.linkedin.com/in/max-mosier/" target="_blank" className="Footer__Text__Link">LINKEDIN</a> &nbsp;
                  <a href="https://github.com/SenpaiSumpie" target="_blank" className="Footer__Text__Link">GITHUB</a> &nbsp; 
                  <a href="mailto:max.lee.mosier@gmail.com" target="_blank" rel="noopener noreferrer" className="Footer__Text__Link">CONTACT</a> &nbsp;
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
