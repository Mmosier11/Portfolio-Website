import React, { useState, useRef, useEffect } from 'react'

import '../App.scss';


import { SectionWrapper } from '../hoc';

import TeamBanditHome from '../assets/projects/TeamBanditHome.png';
import NetzeroHome from '../assets/projects/NetZero.png';
import WorkmentorHome from '../assets/projects/WorkMentor.png';
import TaskerpgHome from '../assets/projects/TaskeRPG.png';

import ReactLogo from '../assets/tech/react.svg';
import ExpressLogo from '../assets/tech/express.svg';
import AWSLogo from '../assets/tech/aws.svg';
import MUILogo from '../assets/tech/mui.svg';
import ReactRouterLogo from '../assets/tech/react-router.svg';
import PostgresLogo from '../assets/tech/postgresql.svg';
import JWTLogo from '../assets/tech/jwt.png';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant }  from '../utils/motion';
import Tilt from 'react-tilt';

import { selectedWorks } from '../constants/constants';

const SelectedWork = ({selected, clicked, handleClicked}) => {
    const [ currentSelected, setCurrentSelected ] = useState(selectedWorks[0]);
    const [ height, setHeight ] = useState('600px');


    const [ isHovering, setIsHovering ] = useState(false);

    const hoverTrue = () => {
        setIsHovering(true);
        if(window.innerWidth < 1215){
            setHeight('1100px');
        }
    }

    const hoverFalse = () => {
        setIsHovering(false);
        setHeight('600px');
    }

    const callHandleClick = () => {
        handleClicked();
    }

    useEffect(() => {
        setCurrentSelected(selectedWorks.find(work => work.id === selected));
    }, [selected]);

    return (
        <div className="SelectedWorkContainer" style={{height: height}}>
            <motion.div 
                className="SelectedWork"
                
                onAnimationComplete={callHandleClick}
                animate={{
                    opacity: clicked ? 0 : 1, 
                    scale: clicked ? 0 : 1,
                }}
                transition={{duration: 0.20}}
            >
                <AnimatePresence className="test">
                { isHovering ? 
                    <motion.div
                        key="HoverSection"
                        className="SelectedWork__HoveredSection"
                        initial={{ opacity: 0, x: 600, scale: 0}}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 600, scale: 0 }}
                    >
                    <Tilt className="SelectedWork__OriginalSection__Button" ><div onClick={()=> hoverFalse()} className="SelectedWork__OriginalSection__Button__Text">GO BACK</div></Tilt>
                        <div className="SelectedWork__HoveredSection__Title">
                            <span className="SelectedWork__HoveredSection__Title__Main"> {currentSelected.name} </span>
                            <span className="SelectedWork__HoveredSection__Title__Sub"> {currentSelected.blurb} </span>
                        </div> 
                        <div className="SelectedWork__HoveredSection__Content">
                            {/* style={{backgroundImage: `url(${TeamBanditHome})`}} */}
                            <div  className="SelectedWork__HoveredSection__Content__Blur">
                                
                                <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide'>
                                    <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide__Top'>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__About'>
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__About__Title">
                                                <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__About__Title__Text"> About</span>
                                            </div>
                                            <p className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__About__Text">
                                                {currentSelected.about}
                                            </p>
                                        </div>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions'>
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Title">
                                                <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Title__Text"> Contributions</span>
                                            </div>
                                            <ul>
                                                {currentSelected.contributions.map((contribution, index) => {
                                                    return <li key={index} className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Text">{contribution}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom'>
                                        <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Title">
                                            <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Title__Text">Technologies and Frameworks</span>
                                        </div>
                                        <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies">
                                            {currentSelected.technologies.map((technology, index) => {
                                                return (
                                                    <div key={index} className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Technology">
                                                        <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Technology__Image" src={technology.logo} alt="Image"/>
                                                        <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Technology__Text">
                                                            {technology.name}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='SelectedWork__HoveredSection__Content__Blur__RightSide'>
                                    <div className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top'>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button'>
                                            <span className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button__Text'>LIVE SITE</span>
                                        </div>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button'>
                                            <span className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button__Text'>FIGMA</span>
                                        </div>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button'>
                                            <span className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button__Text'>CODE</span>
                                        </div>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button'>
                                            <span className='SelectedWork__HoveredSection__Content__Blur__RightSide__Top__Button__Text'>CONCEPTION</span>
                                        </div>
                                    </div>
                                    <div className='SelectedWork__HoveredSection__Content__Blur__RightSide__Bottom'>
                                        <span className='SelectedWork__HoveredSection__Content__Blur__RightSide__Bottom__Team'>THE TEAM</span>
                                        {currentSelected.team.map((member, index) => {
                                            return (
                                                <span key={index} className='SelectedWork__HoveredSection__Content__Blur__RightSide__Bottom__List'>{member}</span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div> : 
                    <motion.div
                        key="OriginalSection"
                        className='SelectedWork__OriginalSection'
                        initial={{ opacity: 0, x: -600, scale: 0 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0 , x: -600, scale: 0}}
                    >
                        <Tilt className="SelectedWork__OriginalSection__Button" ><div onClick={()=> hoverTrue()} className="SelectedWork__OriginalSection__Button__Text">LEARN MORE</div></Tilt>
                        <div className="SelectedWork__ImageContainer">
                            <img src={currentSelected.image} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                        </div>
                        <div className="SelectedWork__Title">
                            <p className="SelectedWork__Title__Main"> {currentSelected.name} </p>
                            <p className="SelectedWork__Title__Sub"> {currentSelected.blurb} </p>
                        </div> 
                        <div className="SelectedWork__Technologies">
                            {currentSelected.technologies.map((technology, index) => {
                                return <img key={index} src={technology.logo} alt="Technology" className="SelectedWork__Technologies__Technology"/>
                            })}
                        </div>
                    </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </div> 
        
    );
}


export default SelectedWork;