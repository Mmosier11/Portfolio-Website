import React, { useState, useEffect } from 'react';

import '../App.scss';
import { SectionWrapper } from '../hoc';

import SelectedWork from './SelectedWork';

import NetZeroIcon from '../assets/MaxLogo.png';
import MobileIcon from '../assets/mobile.png';
import WebIcon  from '../assets/web.png';
import CreatorIcon from '../assets/creator.png';
import BackendIcon from '../assets/backend.png';

import NetZeroLogo from '../assets/NetZeroLogo.svg';
import TeamBanditLogo from '../assets/TeamBanditLogo.png';
import WorkMentorLogo from '../assets/WorkMentorLogo.png';
import TaskerpgLogo from '../assets/TaskeRPGLogo.png';

import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant }  from '../utils/motion';

const SelectedWorks = () => {

    const [ selected, setSelected ] = useState('TeamBandit');

    return (
        <div className="SelectedWorks">
            <motion.div 
                variants={textVariant()}
                className="SelectedWorks__SectionHeader"
            >
                <h1 className="SelectedWorks__SectionHeader__SectionTitle"> SELECTED WORKS </h1>
                <div className="SelectedWorks__SectionHeader__HorizontalDivider"></div>
            </motion.div>
            <div className="SelectedWorks__SectionContent">
                
                <div className="SelectedWorks__SectionContent__Buttons">
                    <Tilt className="SelectedWorks__SectionContent__Buttons__Tilt">
                        <motion.div
                            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Highlighted"
                        >
                            <img className="SelectedWorks__SectionContent__Buttons__Normal__Image" src={TeamBanditLogo} alt="Netzero Home"/>
                            <p className="SelectedWorks__SectionContent__Buttons__Highlighted__Text">TEAM BANDIT</p>
                        </motion.div>
                    </Tilt>
                    <Tilt className="SelectedWorks__SectionContent__Buttons__Tilt">
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * 2, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Normal"
                        >
                            <img className="SelectedWorks__SectionContent__Buttons__Normal__Image" src={NetZeroLogo} alt="Netzero Home"/>
                            <p className="SelectedWorks__SectionContent__Buttons__Normal__Text">NETZERO</p>
                        </motion.div>
                    </Tilt>
                    <Tilt className="SelectedWorks__SectionContent__Buttons__Tilt">
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * 3, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Normal"
                        >
                            <img className="SelectedWorks__SectionContent__Buttons__Normal__Image" src={WorkMentorLogo} alt="Netzero Home"/>
                            <p className="SelectedWorks__SectionContent__Buttons__Normal__Text">WORKMENTOR</p>
                        </motion.div>
                    </Tilt>
                    <Tilt className="SelectedWorks__SectionContent__Buttons__Tilt">
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * 4, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Normal"
                        >
                        <img className="SelectedWorks__SectionContent__Buttons__Normal__Image" src={TaskerpgLogo} alt="Netzero Home"/>
                            <p className="SelectedWorks__SectionContent__Buttons__Normal__Text">TASKERPG</p>
                        </motion.div>
                    </Tilt>
                </div>
                <SelectedWork selected={selected}/>
            </div>
        </div>
    );
}

export default SectionWrapper(SelectedWorks, 'SelectedWorks');
