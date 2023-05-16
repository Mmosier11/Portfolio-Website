import React from 'react'

import { motion } from 'framer-motion';

import Title from './Title';


import DownArrow from '../assets/down-arrow.svg';
import video from '../assets/synthwave.mp4';

/***********************************************************************/
/*                               HERO                                  */
/***********************************************************************/

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='w-full h-screen absolute inset-0 z-10 bg-black bg-opacity-20'>
        <Title/> 
      </div>
      <div className="absolute xs:bottom-20 bottom-8 w-full flex justify-center items-center z-20">
        <a href="#works" className="cursor-pointer">
          <div className="w-[5rem] h-[64px] flex justify-center items-start p-2 cursor-pointer">
            <motion.div 
              className="down-arrow"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
            >
              <img src={DownArrow} alt="DownArrow"/>
            </motion.div>
          </div>
        </a>
      </div>
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-screen absolute object-cover"
      />
    </section>
  );
}

export default Hero;