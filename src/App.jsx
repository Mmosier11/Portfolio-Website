import React, {useState, useEffect, useCallback} from 'react';
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
      
      <div className="relative z-0 bg-primary">
        <div className='fixed w-full'>
          {/* <Navbar/> */}
          <Hero/>
        </div>
        
        <div id="main-content" className='MainContent'>
        <SmoothProvider className="MainContent__SmoothProvider">  
          <div className='MainContent__Content'>
            <Particles 
              id="particles"
              options={particlesSettings}
              init={particlesInit} 
              loaded={particlesLoaded} 
            />
            <SelectedWorks/>
            <div className="MainContent__Content__SectionDivider"></div>

            <div className="other-works">
              <div className="section-header">
                <h1 className="section-title"> OTHER WORKS </h1>
                <div className="horizontal-title-divider"></div>
              </div>
              <div className="other-works-content">
                <div className="other-works-v2">
                  <p className="other-works-list">
                    <span className="other-works-list-title">live website projects</span>
                    <br/>
                    Netflix Clone
                    Web 3.0 Blockchain App
                    Admin Dashboard 
                    ECommerce Web Shop
                    Web 3 NFT Card Game
                    Spline and 3JS Website
                    Restaurant Web Application
                    Realtime Chat Messaging
                    Spotify Clone
                    YouTube Clone
                    Social Media App
                    Chat GPT Clone
                    A.I. and Three JS Store
                    A.I. Image Generation App <br/>
                    T3 Stack Twitter Clone
                  </p>
                  <div className="other-works-divider"></div>
                  <p className="other-works-list">
                    <span className="other-works-list-title">Figma Projects</span>
                    <br/>
                    Parallax Scroll with AI
                    A.I. Web Design # 1
                    A.I. Web Design # 2
                    Discord Clone
                    Sports Team Manager
                  </p>
                  <div className="other-works-divider"></div>
                  <p className="other-works-list">
                    <span className="other-works-list-title">archived</span>
                    <br/>
                    Portfolio Project V1
                    <br/>
                    <span className="other-works-list-title">Codepens</span>
                    <br/>
                    User Sign Up
                    Fire Game
                    Sabacc
                  </p>
                </div>
              </div>
            </div>

            <div className="MainContent__Content__SectionDivider"></div>

            <div className="credits">
              <div className="section-header">
                <h1 className="section-title"> CREDITS </h1>
                <div className="horizontal-title-divider"></div>
              </div>
              <div className="credits-content">
              <p className="credits-sections">
                Work History
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                education
                <br/>
                <br/>
                certificates
                <br/>
                <br/>
                interests
                </p>
                <p className="credits-text">
                  Front-End Developer |Cognizant | JUNE 22-Present<br/>
                  Senior Student technician | Joseph City high school | JUNE 21 - AUGUST 21<br/>
                  IT Help desk | United States Geological survey | JULY 19 - FEBRUARY 20<br/>
                  student technician | Norther Arizona university | JULY 18 - APRIL 19<br/>
                  IT Assistant | Joseph City High School | JUNE 16 - JULY 18
                  <br/>
                  <br/>
                  Bachelors of science in computer science | northern Arizona university | May 2022
                  <br/>
                  <br/>
                  google professional ux design | Coursera | JANUARY 23
                  <br/>
                  <br/>
                  Board games<br/>
                  video games<br/>
                  TV shows<br/>
                  movies<br/>
                  Books<br/>
                  80s Synthwave<br/>
                </p>  
              </div> 
            </div>

          </div>
          <div className="footer">
              <p className="footer-text"> <span className="footer-name">Max Mosier</span> | LINKEDIN GITHUB CONTACT</p>
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
          </SmoothProvider>
        </div>
        
      </div>
      
    </Router>
  );
}

export default App
