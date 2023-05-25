import React from 'react'

import { motion } from 'framer-motion';

import DownArrow from '../assets/down-arrow.svg';

import { SectionWrapper } from '../hoc';

// Social Media Icons
import LinkedIn from '../assets/linked-in-mono.svg';
import Github from '../assets/github-mono.svg';
import Email from '../assets/email.svg';

// Profile Image
import MaxMosier from '../assets/MaxImage.jpg';

// Tech Stack Icons
import ReactLogo from '../assets/tech/react.svg';
import NextJSLogo from '../assets/tech/next-js.svg';
import Tailwind from '../assets/tech/tailwind.png';
import SCSSLogo from '../assets/tech/scss.svg';
import HTML from '../assets/tech/html5.svg';
import CSS from '../assets/tech/css3.svg';
import TypeScript from '../assets/tech/typescript.svg';

/***********************************************************************/
/*                               HERO                                  */
/***********************************************************************/

const Hero = () => {
  return (
    <section className='Hero'>
      
      <div className='Hero__Content'>
        <div className='Hero__Inner'>
          <div className='Hero__Content__Overview'>
            <span className='Hero__Content__Overview__Title'>Front-End Developer</span>
            <span className='Hero__Content__Overview__Description'>Hi, I'm Max Mosier. A passionate Front-end React Developer based in the United States.</span>
            <div className='Hero__Content__Overview__Links'>
              <a href="https://www.linkedin.com/in/max-mosier/" target="_blank"  className='cursor-pointer Hero__Content__Overview__Links__Container'>
                <img src={LinkedIn} alt='LinkedIn' className="Hero__Content__Overview__Links__Link"/>
              </a>
              <a href="https://github.com/SenpaiSumpie" target="_blank"  className='cursor-pointer Hero__Content__Overview__Links__Container'>
                <img src={Github} alt='Github' className="Hero__Content__Overview__Links__Link"/>
              </a>
              <a 
                href="mailto:max.lee.mosier@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='cursor-pointer Hero__Content__Overview__Links__Container'
              >
                <img src={Email} alt='Github' className="Hero__Content__Overview__Links__Link"/>
              </a>
              <span className="Hero__Email">max.lee.mosier@gmail.com</span>
            </div>
          </div>
          <div className='Hero__Content__Image'>
            <img src={MaxMosier} alt="Max Mosier" className='Hero__Content__Image__Picture'/>
          </div>
        </div>
        <div className='Hero__TechStack'>
            <span className='Hero__TechStack__Intro'> Tech Stack |</span>
            <img src={HTML} alt="HTML" className='Hero__TechStack__Logo'/>
            <img src={CSS} alt="CSS" className='Hero__TechStack__Logo'/>
            <img src={TypeScript} alt="TypeScript" className='Hero__TechStack__Logo'/>
            <img src={ReactLogo} alt="ReactLogo" className='Hero__TechStack__Logo'/>
            <img src={NextJSLogo} alt="NextJSLogo" className='Hero__TechStack__Logo'/>
            <img src={Tailwind} alt="Tailwind" className='Hero__TechStack__Logo'/>
            <img src={SCSSLogo} alt="Scss" className='Hero__TechStack__Logo'/>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Hero, 'hero');