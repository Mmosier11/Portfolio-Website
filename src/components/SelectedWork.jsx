import React, { useState, useRef, useEffect } from 'react'

import '../App.scss';


import { SectionWrapper } from '../hoc';

import TeamBanditHome from '../assets/projects/TeamBanditHome.png';
import NetzeroHome from '../assets/projects/NetZero.png';
import WorkmentorHome from '../assets/projects/WorkMentor.png';
import TaskerpgHome from '../assets/projects/TaskeRPG.png';

import { motion } from 'framer-motion';
import { fadeIn, textVariant }  from '../utils/motion';

const SelectedWork = ({selected}) => {

    const [ isHovering, setIsHovering ] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className="SelectedWorkContainer">
            <div className="SelectedWork" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                { isHovering ? 
                    <motion.div
                        className="SelectedWork__HoveredSection"
                        initial={{opacity: 0}}
                        whileHover={{
                            opacity: 1,
                        }}
                        exit={{opacity: 0}}
                    >
                        <div className="SelectedWork__HoveredSection__Title">
                            <span className="SelectedWork__HoveredSection__Title__Main"> TEAMBANDIT </span>
                            <span className="SelectedWork__HoveredSection__Title__Sub"> TEAMS MANAGEMENT PORTAL </span>
                        </div> 
                        <div className="SelectedWork__ImageContainer">
                            <img src={TeamBanditHome} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                        </div>
                        
                    </motion.div> : 
                    <motion.div
                        initial={{opacity: 1}}
                        whileHover={{
                            opacity: 0.5
                        }}
                        exit={{opacity: 1}}
                    >
                        <div className="SelectedWork__ImageContainer">
                            <img src={TeamBanditHome} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                        </div>
                        <div className="SelectedWork__Title">
                            <p className="SelectedWork__Title__Main"> TEAM BANDIT </p>
                            <p className="SelectedWork__Title_Sub"> TEAMS MANAGEMENT PORTAL </p>
                            <p className="SelectedWork__Title_Sub"> {isHovering ? "Hovering" : "Not Hovering"} </p>
                        </div> 
                    </motion.div>
                    }

            </div>
        </div> 
        
    );
}


export default SelectedWork;