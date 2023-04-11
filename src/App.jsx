import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Scrollama, Step } from 'react-scrollama';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import { motion, useScroll, useTransform } from "framer-motion";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ExperimentalCover } from './components';
import './App.css';

const App = () => {

  return (

    <Router>
      <div className="noise"></div>
      <div className="relative z-0 bg-primary">
        <div className='fixed bg-hero-pattern bg-cover bg-no-repeat bg-center w-full'>
          {/* <Navbar/> */}
          <Hero/>
        </div>
        <div className='body bg-transparent'>
          <div className='content'>
            <div className="selected-works">
              <div className="section-header">
                <h1 className="section-title"> SELECTED WORKS </h1>
                <div className="horizontal-title-divider"></div>
              </div>
              <div className="section-content">
                <div className="selected-work">
                  <div className="selected-work-image-opacity"></div>
                  <div className="selected-work-image"></div>
                  <div className="selected-work-title">
                    <p className="selected-work-title-main"> TEAM BANDIT </p>
                    <p className="selected-work-title-sub"> TEAMS MANAGEMENT PORTAL </p>
                  </div>
                  
                </div>
                <div className="selected-work-buttons">
                  <div className="button-highlighted">
                    <p className="button-text-highlighted">TEAM BANDIT</p>
                  </div>
                  <div className="button">
                    <p className="button-text">NETZERO</p>
                  </div>
                  <div className="button">
                    <p className="button-text">WORKMENTOR</p>
                  </div>
                  <div className="button">
                    <p className="button-text">TASKERPG</p>
                  </div>
                </div>
              </div>
            </div>
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
    </Router>
  );
}

export default App
