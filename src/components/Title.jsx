import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import gif from '/src/assets/max_mosier_hero_title.gif';

import '../App.scss';

const Title = () => {

    const [ hideContent, setHideContent ] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

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
            className={hideContent ? 'DisplayNone' : ''}
        >
            <img src={gif} alt="loading..." className="w-full h-screen"/>
        </div>
    );
}

export default Title