import React, {useEffect, useState} from 'react'

import { SectionWrapper } from '../hoc';

import { motion, AnimatePresence } from 'framer-motion';

const OtherWorks = () => {
    const [hovering, setHovering] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    const [imgUrl, setImgUrl] = useState("https://firebasestorage.googleapis.com/v0/b/portfolio-vue-2019.appspot.com/o/webp%2Fheroes.webp?alt=media&token=2410b122-68f3-401b-a2cc-56c441c4df39");

    const handleMouseOver = (e) => {
        const boundingRect = e.target.getBoundingClientRect();
        const xPos = e.clientX - boundingRect.left;
        const yPos = e.clientY - boundingRect.top;
        setXPos(xPos);
        setYPos(yPos);
        setHovering(true);
    };
    
    const handleMouseOut = () => {
        setHovering(false);
    };

    return (
        <div className="OtherWorks">
            <div className="OtherWorks__Header">
                <h1 className="OtherWorks__Header__Title"> OTHER WORKS </h1>
                <div className="OtherWorks__Header__HorizontalDivider"></div>
            </div>
            <motion.a
                href="https://codepen.io/Yasio/details/eXBRYP"
                data-img={imgUrl}
                aria-label="Select Your Coding Hero!"
                rel="noreferrer"
                target="_blank"
                data-fx="1"
                onMouseMove={handleMouseOver}
                onMouseOut={handleMouseOut}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 1, delay: 1, ease: 'easeInOut'}}
                style={{ position: 'relative', display: 'inline-block' }}
            >
                Select Your Coding Hero!
                <AnimatePresence>
                {hovering && (
          <motion.div
            className="hover-reveal"
            style={{ top: yPos + 10, left: xPos, zIndex: 1 }}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="hover-reveal__inner">
              <motion.div
                className="hover-reveal__img"
                style={{ backgroundImage: `url(${imgUrl})` }}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        )}
        </AnimatePresence>
            </motion.a>
            <div className="OtherWorks__Content">
                <div className="OtherWorks__Content__Inside">
                
                    <p className="OtherWorks__Content__Inside__List">
                        <span className="OtherWorks__Content__Inside__List__Title">live website projects</span>
                        <br/>
                        Netflix Clone<br/>
                        Web 3.0 Blockchain App<br/>
                        Admin Dashboard <br/>
                        ECommerce Web Shop<br/>
                        Web 3 NFT Card Game<br/>
                        Spline and 3JS Website<br/>
                        Restaurant Web Application<br/>
                        Realtime Chat Messaging<br/>
                        Spotify Clone<br/>
                        YouTube Clone<br/>
                        Social Media App<br/>
                        Chat GPT Clone<br/>
                        A.I. and Three JS Store<br/>
                        A.I. Image Generation App <br/>
                        T3 Stack Twitter Clone
                    </p>
                    <div className="OtherWorks__Content__Inside__Divider"></div>
                    <p className="OtherWorks__Content__Inside__List">
                        <span className="OtherWorks__Content__Inside__List__Title">Figma Projects</span>
                        <br/>
                        Parallax Scroll with AI<br/>
                        A.I. Web Design # 1<br/>
                        A.I. Web Design # 2<br/>
                        Discord Clone<br/>
                        Sports Team Manager
                    </p>
                    <div className="OtherWorks__Content__Inside__Divider"></div>
                    <p className="OtherWorks__Content__Inside__List">
                        <span className="OtherWorks__Content__Inside__List__Title">archived</span>
                        <br/>
                        Portfolio Project V1
                        <br/>
                        <span className="OtherWorks__Content__Inside__List__Title">Codepens</span>
                        <br/>
                        User Sign Up
                        Fire Game
                        Sabacc
                    </p>
                </div>
            </div>
        </div>
    );
}
export default SectionWrapper(OtherWorks, 'OtherWorks');