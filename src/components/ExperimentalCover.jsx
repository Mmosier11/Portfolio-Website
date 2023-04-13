import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import '../App.scss';

const ExperimentalCover = () => {

    const [ hideContent, setHideContent ] = useState(false);
    const [ scrollHeight, setScrollHeight ] = useState(0);
    const [ viewPortHeight, setViewPortHeight ] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollHeight(position);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if( scrollHeight >= viewPortHeight / 2 ) {
            setHideContent(true);
        } else {
            setHideContent(false);
        }
    }, [scrollHeight]);

    return (
        <div
            className={hideContent ? 'display-none' : ''}
        >
            <div className="top-left">
                <p className="name">Max Mosier</p>
            </div>
            <div className="top-right">
                <p className="retro-text">001</p>
                <p className="retro-text">------------</p>
                <p className="retro-text">Front-End Developer</p>
                <p className="retro-text">002</p>
                <p className="retro-text">------------</p>
                <p className="retro-text">UI/UX Designer</p>
            </div>
            <div className="bottom-left">
                <p className="retro-text"> LOCATION // '23 </p>
                <p className="retro-text"> ---- </p>
                <p className="retro-text"> DALLAS, TEXAS </p>
                <p className="retro-text"> // AVAILABLE WORLD WIDE </p>
            </div>
            <div className="middle">
                <p className="retro-text"> INITIALIZE:// </p>
                <p className="retro-text"> ---- </p>
                <p className="retro-text"> SCROLL TO BEGIN -{'>'} </p>
            </div>
            <div className="bottom-right">
                <p className="retro-text"> SELECTED WORKS.[OK] </p>
                <p className="retro-text"> OTHER WORKS....[OK] </p>
                <p className="retro-text"> CREDITS........[OK] </p>
            </div>
        </div>
    );
}

export default ExperimentalCover