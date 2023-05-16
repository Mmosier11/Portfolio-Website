import React, { useState, useEffect, useRef } from 'react';

import '../App.scss';
import { SectionWrapper } from '../hoc';

import SelectedWork from './SelectedWork';

import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant }  from '../utils/motion';

import { selectedWorks } from '../constants/constants';

const SelectedWorks = () => {

    const [ clicked, setClicked ] = useState(false);
    const [ selected, setSelected ] = useState('team-bandit');

    const updateSelected = (selected) => {
        setSelected(selected);
    };

    const handleClickedFalse = () => {
        setClicked(false);
    };

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
                    { selectedWorks.map((work, index) => {
                        return (
                            <Tilt className="SelectedWorks__SectionContent__Buttons__Tilt" key={index}>
                                <motion.div 
                                    variants={fadeIn("right", "spring", 0.25 * (index + 1), 0.75)}
                                    className={work.id === selected ? "SelectedWorks__SectionContent__Buttons__Normal__Highlighted" : "SelectedWorks__SectionContent__Buttons__Normal"}
                                    onClick={() => {
                                        setClicked(true);
                                        updateSelected(work.id);
                                    }}
                                >
                                    <img className="SelectedWorks__SectionContent__Buttons__Normal__Image" src={work.logo} alt={work.title}/>
                                    <p className={ work.id === selected ? "SelectedWorks__SectionContent__Buttons__Normal__Highlighted__Text" : "SelectedWorks__SectionContent__Buttons__Normal__Text"}>
                                        {work.name}
                                    </p>
                                </motion.div>
                            </Tilt>
                        )
                    })}
                    
                </div>
                <SelectedWork selected={selected} clicked={clicked} handleClicked={handleClickedFalse}/>
            </div>
        </div>
    );
}

export default SectionWrapper(SelectedWorks, 'works');
