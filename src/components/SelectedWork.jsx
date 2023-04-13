import React, { useState } from 'react'

import '../App.scss';

import TeamBanditHome from '../assets/projects/TeamBanditHome.png';

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
                <div className="SelectedWork__ImageContainer">
                    <img src={TeamBanditHome} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                </div>
                <div className="SelectedWork__Title">
                    <p className="SelectedWork__Title__Main"> TEAM BANDIT </p>
                    <p className="SelectedWork__Title_Sub"> TEAMS MANAGEMENT PORTAL </p>
                    <p className="SelectedWork__Title_Sub"> {isHovering ? "Hovering" : "Not Hovering"} </p>
                </div>
            </div>
            <div className="SelectedWork" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                <div className="SelectedWork__ImageContainer">
                    <img src={TeamBanditHome} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                </div>
                <div className="SelectedWork__Title">
                    <p className="SelectedWork__Title__Main"> TEAM BANDIT </p>
                    <p className="SelectedWork__Title_Sub"> TEAMS MANAGEMENT PORTAL </p>
                    <p className="SelectedWork__Title_Sub"> {isHovering ? "Hovering" : "Not Hovering"} </p>
                </div>
            </div>
            <div className="SelectedWork" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                <div className="SelectedWork__ImageContainer">
                    <img src={TeamBanditHome} alt="Selected Work Image" className="SelectedWork__ImageContainer__Image"/>
                </div>
                <div className="SelectedWork__Title">
                    <p className="SelectedWork__Title__Main"> TEAM BANDIT </p>
                    <p className="SelectedWork__Title_Sub"> TEAMS MANAGEMENT PORTAL </p>
                    <p className="SelectedWork__Title_Sub"> {isHovering ? "Hovering" : "Not Hovering"} </p>
                </div>
            </div>
        </div>
        
    );
}


export default SelectedWork;