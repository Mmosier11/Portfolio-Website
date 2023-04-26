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
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
        style={{ scaleX: scaleX }}
      />
      <div className="Noise"></div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='255, 255, 255'
        innerScale={1.35}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '2px solid #fff'
        }}
        clickables={[
          'p',
          'a',
          'motion.a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <div className="relative z-0 bg-primary">
        <div className='fixed w-full'>
          {/* <Navbar/> */}
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
            <div className="MainContent__Content__SectionDivider"></div>
            <OtherWorks/>
            <div className="MainContent__Content__SectionDivider"></div>
            <Credits/>
          </div>
          <div className="Footer">
              <p className="Footer__Text"> 
                <span className="Footer__Text__Name">Max Mosier</span> | LINKEDIN GITHUB CONTACT
                </p>
          </div>
          
        
          {/* <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div> */}
          </div>
        </div>
        
      </div>
      
    </Router>
  );
}

export default App
