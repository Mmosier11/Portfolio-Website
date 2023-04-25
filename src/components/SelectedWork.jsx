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

const SelectedWork = ({selected}) => {

    const [ isHovering, setIsHovering ] = useState(false);

    const handleHover = () => {
        setIsHovering(!isHovering);
    };

    return (
        <div className="SelectedWorkContainer">
            <motion.div 
                className="SelectedWork" 
                onMouseEnter={handleHover} 
                onMouseLeave={handleHover}
            >
                <AnimatePresence>
                { isHovering ? 
                    <motion.div
                        key="HoverSection"
                        className="SelectedWork__HoveredSection"
                        initial={{ opacity: 0, x: 600, scale: 0}}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x:600, scale: 0 }}
                    >
                        <div className="SelectedWork__HoveredSection__Title">
                            <span className="SelectedWork__HoveredSection__Title__Main"> TEAMBANDIT </span>
                            <span className="SelectedWork__HoveredSection__Title__Sub"> TEAMS MANAGEMENT PORTAL </span>
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
                                                A revolutionary course management portal which combines every element of communication, administration, delegation, and organization to provide a seamless platform for teaching professional skills in the environment most practical to the modern workforce— in a team.
                                            </p>
                                        </div>
                                        <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions'>
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Title">
                                                <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Title__Text"> Contributions</span>
                                            </div>
                                            <ul>
                                                <li className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Text">- Set up Front-End and Back-End infrastructure</li>
                                                <li className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Text">- Implemented CSV Upload Feature</li>
                                                <li className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Text">- Built Team Sorting Algorithm and Manual Sort Page</li>
                                                <li className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Text">- Implemented User Creation and User Authentication with JWT</li>
                                                <li className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Top__Contributions__Text">- Implemented CRUD functionality for multiple data types</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom'>
                                        <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Title">
                                            <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Title__Text">Technologies and Frameworks</span>
                                        </div>
                                        <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies">
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group">
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={ReactLogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        REACT
                                                    </span>
                                                </div>
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={AWSLogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        AWS
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group">
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={PostgresLogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        POSTGRESQL
                                                    </span>
                                                </div>
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        BCRYPT
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group">
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={ExpressLogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        EXPRESS JS
                                                    </span>
                                                </div>
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={ReactRouterLogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        REACT ROUTER
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group">
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={MUILogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        Material UI
                                                    </span>
                                                </div>
                                                <div className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology">
                                                    <img className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Image" src={JWTLogo} alt="Image"/>
                                                    <span className="SelectedWork__HoveredSection__Content__Blur__LeftSide__Bottom__Technologies__Group__Technology__Text">
                                                        JWT TOKENS
                                                    </span>
                                                </div>
                                            </div>
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
                                        <span className='SelectedWork__HoveredSection__Content__Blur__RightSide__Bottom__List'>
                                            Max Mosier
                                            <br/>
                                            Quinn Melssen
                                            <br/>
                                            Dakota Battle 
                                            <br/>
                                            Liam Scholl
                                        </span>
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
                        <div className="SelectedWork__ImageContainer">
                            <img src={TeamBanditHome} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                        </div>
                        <div className="SelectedWork__Title">
                            <p className="SelectedWork__Title__Main"> TEAM BANDIT </p>
                            <p className="SelectedWork__Title_Sub"> TEAMS MANAGEMENT PORTAL </p>
                        </div> 
                    </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </div> 
        
    );
}


export default SelectedWork;