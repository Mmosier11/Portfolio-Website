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
            className={hideContent ? 'Cover DisplayNone' : 'Cover'}
        >
            <div className="Cover__TopLeft">
                <p className="Cover__TopLeft__Name">Max Mosier</p>
            </div>
            <div className="Cover__TopRight">
                <p className="Cover__TopRight__RetroText">001</p>
                <p className="Cover__TopRight__RetroText">------------</p>
                <p className="Cover__TopRight__RetroText">Front-End Developer</p>
                <p className="Cover__TopRight__RetroText">002</p>
                <p className="Cover__TopRight__RetroText">------------</p>
                <p className="Cover__TopRight__RetroText">UI/UX Designer</p>
            </div>
            <div className="Cover__BottomLeft">
                <p className="Cover__BottomLeft__RetroText"> LOCATION // '23 </p>
                <p className="Cover__BottomLeft__RetroText"> ---- </p>
                <p className="Cover__BottomLeft__RetroText"> DALLAS, TEXAS </p>
                <p className="Cover__BottomLeft__RetroText"> // AVAILABLE WORLD WIDE </p>
            </div>
            <div className="Cover__Middle">
                <p className="Cover__Middle__RetroText"> INITIALIZE:// </p>
                <p className="Cover__Middle__RetroText"> ---- </p>
                <p className="Cover__Middle__RetroText"> SCROLL TO BEGIN -{'>'} </p>
            </div>
            <div className="Cover__BottomRight">
                <p className="Cover__BottomRight__RetroText"> SELECTED WORKS.[OK] </p>
                <p className="Cover__BottomRight__RetroText"> OTHER WORKS....[OK] </p>
                <p className="Cover__BottomRight__RetroText"> CREDITS........[OK] </p>
            </div>
        </div>
    );
}

export default ExperimentalCover