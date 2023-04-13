import React, { useState, useEffect } from 'react';

import '../App.scss';
import { SectionWrapper } from '../hoc';

import SelectedWork from './SelectedWork';

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
                <SelectedWork selected={selected}/>
                <div className="SelectedWorks__SectionContent__Buttons">
                    <Tilt>
                        <motion.div
                            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Highlighted"
                        >
                            <p className="SelectedWorks__SectionContent__Buttons__Highlighted__Text">TEAM BANDIT</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * 2, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Normal"
                        >
                            <p className="SelectedWorks__SectionContent__Buttons__Normal__Text">NETZERO</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * 3, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Normal"
                        >
                            <p className="SelectedWorks__SectionContent__Buttons__Normal__Text">WORKMENTOR</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div 
                            variants={fadeIn("right", "spring", 0.5 * 4, 0.75)}
                            className="SelectedWorks__SectionContent__Buttons__Normal"
                        >
                            <p className="SelectedWorks__SectionContent__Buttons__Normal__Text">TASKERPG</p>
                        </motion.div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default SectionWrapper(SelectedWorks, 'SelectedWorks');
