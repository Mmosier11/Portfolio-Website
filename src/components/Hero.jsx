import React from 'react'

import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { SynthwaveCanvas } from './canvas';


import ExperimentalCover from './ExperimentalCover';
import Title from './Title';
import TextTransition, { presets } from 'react-text-transition';

import ReactImage from '../assets/tech/react.svg';
import NextImage from '../assets/tech/next-js.svg';
import FigmaImage from '../assets/tech/figma.png';
import TypescriptImage from '../assets/tech/typescript.png';
import UnityImage from '../assets/tech/unity.svg';

import EmailIcon from '../assets/email.svg';
import GithubIcon from '../assets/github.svg';
import LinkedinIcon from '../assets/linkedin.svg';

import DownArrow from '../assets/down-arrow.svg';

const TEXTS = ['Front-End Developer', 'UI/UX Designer', 'Full-Stack Developer', 'Motion Designer'];

/***********************************************************************/
/*                               HERO                                  */
/***********************************************************************/
const title = "Front-End Developer"
const Hero = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className='Hero'>
      <div className='Hero__Top'>
        <div className='Hero__Top__Introduction'>
          <span className='Hero__Top__Introduction__Text'>Hi, I'm <span className='Hero__Top__Introduction__Name'>Max Mosier</span></span>
          <span className='hero glitch layers' data-text={TEXTS[index % TEXTS.length]}><span><TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition></span></span>
        </div>
        <div className='Hero__Top__Tech'>
          <div className='Hero__Top__Tech__Techy'>
            <img src={EmailIcon} alt="Email"/>
            <img src={GithubIcon} alt="Github"/>
            <img src={LinkedinIcon} alt="Linked-In"/>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#works" className="cursor-pointer">
          <div className="w-[5rem] h-[64px] flex justify-center items-start p-2 cursor-pointer">
            <motion.div 
              className="down-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
            >
              <img src={DownArrow} alt="DownArrow"/>
            </motion.div>
          </div>
        </a>
      </div>
      
      {/* <div className='w-full h-screen absolute inset-0 z-10 bg-black bg-opacity-10'>
        <Title/> 
      </div> */}
      {/* <ExperimentalCover/> */}
      {/* <div className={`${styles.paddingX} absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Max</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className='text-[#915eff]'>Full Stack Developer</span> <br/> and <span className='text-[#915eff]'>UI/UX Designer</span> from <span className='text-[#915eff]'>America</span>
          </p>
        </div>
      </div> */}
      {/* <ComputersCanvas/>  */}
      {/* <SynthwaveCanvas/> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about" className="cursor-pointer">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white border-opacity-75 flex justify-center items-start p-2 cursor-pointer">
            <motion.div 
              className="w-3 h-3 bg-white bg-opacity-75 rounded-full mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            />
          </div>
        </a>
      </div> */}
    </section>
  );
}

export default SectionWrapper(Hero, 'hero')