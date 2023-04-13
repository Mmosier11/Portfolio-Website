import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../App.scss';

const Test = () => {

    
    return (
        <div className='parent-div'>
            <div className='sub-div'>
                <div className='sub-div-1'>
                    hi
                </div>
                <div className='sub-div-2'>
                    hi
                </div>
                <div className='sub-div-3'>
                    hi
                </div>
            </div>
        </div>
    );
}

export default Test;