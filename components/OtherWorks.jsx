'use client';

import React, { useState, useEffect } from 'react';

import { SectionWrapper } from '../hoc';

import { motion, AnimatePresence } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { liveWebsites, threeJS, clientWork } from '../constants/constants';

const OtherWorks = () => {
    const [currentHover, setCurrentHover] = useState('');
    const [hovering, setHovering] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    const handleMouseOver = (e, id) => {
        const boundingRect = e.target.getBoundingClientRect();
        const xPos = e.clientX - boundingRect.left;
        const yPos = e.clientY - boundingRect.top;
        setXPos(xPos);
        setYPos(yPos);
        setHovering(true);
        setCurrentHover(id);
    };

    const handleMouseOut = () => {
        setHovering(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
    }, []);

    return (
        <div className="OtherWorks">
            <div className="OtherWorks__Header">
                <h1 className="OtherWorks__Header__Title" data-aos="fade-up">
                    {' '}
                    OTHER WORKS{' '}
                </h1>
                <div className="OtherWorks__Header__HorizontalDivider"></div>
            </div>

            <div className="OtherWorks__Content">
                <div className="OtherWorks__Content__Inside">
                    <div className="OtherWorks__Content__Inside__List">
                        <span
                            className="OtherWorks__Content__Inside__List__Title"
                            data-aos="fade-up"
                        >
                            client work
                        </span>
                        {clientWork.map((website, index) => {
                            return (
                                <motion.a
                                    key={website.id}
                                    href={website.link}
                                    data-img={website.image}
                                    className="OtherWorks__Content__Inside__List__Item"
                                    aria-label="Select Your Coding Hero!"
                                    rel="noreferrer"
                                    target="_blank"
                                    data-fx="1"
                                    onMouseMove={(event) =>
                                        handleMouseOver(event, website.id)
                                    }
                                    onMouseOut={handleMouseOut}
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.25 * index,
                                        ease: 'easeInOut'
                                    }}
                                    style={{
                                        position: 'relative',
                                        display: 'inline-block'
                                    }}
                                >
                                    {website.name}
                                    <AnimatePresence>
                                        {hovering &&
                                            currentHover == website.id && (
                                                <motion.div
                                                    className="hover-reveal"
                                                    style={{
                                                        top: yPos + 10,
                                                        left: xPos,
                                                        zIndex: 1
                                                    }}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                        scale: 0.8
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        scale: 1
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: 100,
                                                        scale: 0.8
                                                    }}
                                                    transition={{
                                                        duration: 0.2
                                                    }}
                                                >
                                                    <div className="hover-reveal__inner">
                                                        <motion.div
                                                            className="hover-reveal__img"
                                                            style={{
                                                                backgroundImage: `url(${website.image})`
                                                            }}
                                                            initial={{
                                                                x: '-100%'
                                                            }}
                                                            animate={{ x: 0 }}
                                                            transition={{
                                                                duration: 0.2
                                                            }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                    </AnimatePresence>
                                </motion.a>
                            );
                        })}
                    </div>
                    <div className="OtherWorks__Content__Inside__List">
                        <span
                            className="OtherWorks__Content__Inside__List__Title"
                            data-aos="fade-up"
                        >
                            Other website projects
                        </span>
                        {liveWebsites.map((website, index) => {
                            return (
                                <motion.a
                                    key={website.id}
                                    href={website.link}
                                    data-img={website.image}
                                    className="OtherWorks__Content__Inside__List__Item"
                                    aria-label="Select Your Coding Hero!"
                                    rel="noreferrer"
                                    target="_blank"
                                    data-fx="1"
                                    onMouseMove={(event) =>
                                        handleMouseOver(event, website.id)
                                    }
                                    onMouseOut={handleMouseOut}
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.25 * index,
                                        ease: 'easeInOut'
                                    }}
                                    style={{
                                        position: 'relative',
                                        display: 'inline-block'
                                    }}
                                >
                                    {website.name}
                                    <AnimatePresence>
                                        {hovering &&
                                            currentHover == website.id && (
                                                <motion.div
                                                    className="hover-reveal"
                                                    style={{
                                                        top: yPos + 10,
                                                        left: xPos,
                                                        zIndex: 1
                                                    }}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                        scale: 0.8
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        scale: 1
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: 100,
                                                        scale: 0.8
                                                    }}
                                                    transition={{
                                                        duration: 0.2
                                                    }}
                                                >
                                                    <div className="hover-reveal__inner">
                                                        <motion.div
                                                            className="hover-reveal__img"
                                                            style={{
                                                                backgroundImage: `url(${website.image})`
                                                            }}
                                                            initial={{
                                                                x: '-100%'
                                                            }}
                                                            animate={{ x: 0 }}
                                                            transition={{
                                                                duration: 0.2
                                                            }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                    </AnimatePresence>
                                </motion.a>
                            );
                        })}
                    </div>
                    <div className="OtherWorks__Content__Inside__List">
                        <span
                            className="OtherWorks__Content__Inside__List__Title"
                            data-aos="fade-up"
                        >
                            Three JS Projects
                        </span>
                        {threeJS.map((website, index) => {
                            return (
                                <motion.a
                                    key={website.id}
                                    href={website.link}
                                    data-img={website.image}
                                    className="OtherWorks__Content__Inside__List__Item"
                                    aria-label="Select Your Coding Hero!"
                                    rel="noreferrer"
                                    target="_blank"
                                    data-fx="1"
                                    onMouseMove={(event) =>
                                        handleMouseOver(event, website.id)
                                    }
                                    onMouseOut={handleMouseOut}
                                    initial={{ opacity: 0, y: 200 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.25 * index,
                                        ease: 'easeInOut'
                                    }}
                                    style={{
                                        position: 'relative',
                                        display: 'inline-block'
                                    }}
                                >
                                    {website.name}
                                    <AnimatePresence>
                                        {hovering &&
                                            currentHover == website.id && (
                                                <motion.div
                                                    className="hover-reveal"
                                                    style={{
                                                        top: yPos + 10,
                                                        left: xPos,
                                                        zIndex: 1
                                                    }}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 100,
                                                        scale: 0.8
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        scale: 1
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: 100,
                                                        scale: 0.8
                                                    }}
                                                    transition={{
                                                        duration: 0.2
                                                    }}
                                                >
                                                    <div className="hover-reveal__inner">
                                                        <motion.div
                                                            className="hover-reveal__img"
                                                            style={{
                                                                backgroundImage: `url(${website.image})`
                                                            }}
                                                            initial={{
                                                                x: '-100%'
                                                            }}
                                                            animate={{ x: 0 }}
                                                            transition={{
                                                                duration: 0.2
                                                            }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                    </AnimatePresence>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SectionWrapper(OtherWorks, 'other');
