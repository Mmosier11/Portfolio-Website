import React from 'react'

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { SynthwaveCanvas } from './canvas';


import ExperimentalCover from './ExperimentalCover';
import Title from './Title';

/***********************************************************************/
/*                               HERO                                  */
/***********************************************************************/
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='w-full h-screen absolute inset-0 z-10 bg-black bg-opacity-10'>
        <Title/> 
      </div>
      <ExperimentalCover/>
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
      <SynthwaveCanvas/>
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

export default Hero