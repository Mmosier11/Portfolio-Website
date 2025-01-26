'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import DownArrow from '@/assets/down-arrow.svg';

import { SectionWrapper } from '../hoc';

// Social Media Icons
import LinkedIn from '@/assets/linked-in-mono.svg';
import Github from '@/assets/github-mono.svg';
import Email from '@/assets/email.svg';

// Profile Image
import MaxMosier from '@/assets/Max2.jpeg';

// Tech Stack Icons
import ReactLogo from '@/assets/tech/react.svg';
import NextJSLogo from '@/assets/tech/next-js.svg';
import Tailwind from '@/assets/tech/tailwind.png';
import SCSSLogo from '@/assets/tech/scss.svg';
import HTML from '@/assets/tech/html5.svg';
import CSS from '@/assets/tech/css3.svg';
import TypeScript from '@/assets/tech/typescript.svg';

// Tilt
import { Tilt } from 'react-tilt';

//******** AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemLayout from './ItemLayout';

/***********************************************************************/
/*                               HERO                                  */
/***********************************************************************/

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
    }, []);

    return (
        <section className="Hero">
            {/* https://codepen.io/RockStarwind/pen/bGYVGQb */}
            <div className="overlays" style={{ '--start': Math.random() * 10 }}>
                <div className="overlay" id="overlay_sky"></div>
                <div className="overlay" id="overlay_stars"></div>
                <div className="overlay overlay_sun" id="overlay_sun">
                    <div className="overlay_sun-sun" id="overlay_sun-sun"></div>
                </div>
                <div className="overlay overlay_sun" id="overlay_sun2">
                    <div
                        className="overlay_sun-sun"
                        id="overlay_sun2-sun"
                    ></div>
                </div>
                <div className="overlay overlay_sun" id="overlay_sun3">
                    <div
                        className="overlay_sun-sun"
                        id="overlay_sun3-sun"
                    ></div>
                </div>
                <div className="overlay" id="overlay_floor">
                    <div id="overlay_floor-color"></div>
                    <div id="overlay_floor-grid"></div>
                    <div id="overlay_floor-horizon"></div>
                    <div id="overlay_floor-horizon2"></div>
                </div>
                <div className="overlay overlay_mountain" id="overlay_mountain">
                    <div
                        className="overlay_mountain-mountain"
                        id="overlay_mountain-mountain"
                    ></div>
                </div>
                <div className="overlay" id="overlay_overlay"></div>
            </div>
            <div className="Hero__Content">
                <ItemLayout className={'col-span-full'}>
                    <div className="Hero__Inner">
                        <div className="Hero__Content__Overview">
                            <span
                                className="Hero__Content__Overview__Title"
                                data-aos="fade-up"
                            >
                                Software Developer
                            </span>
                            <span
                                className="Hero__Content__Overview__Description"
                                data-aos="fade-up"
                            >
                                Hi, I&apos;m Max Mosier. A passionate Front-end
                                Next JS Developer based in the United States.
                            </span>
                            <div
                                className="Hero__Content__Overview__Links"
                                data-aos="fade-up"
                            >
                                <a
                                    href="https://www.linkedin.com/in/max-mosier/"
                                    target="_blank"
                                    className="cursor-pointer Hero__Content__Overview__Links__Container"
                                >
                                    <Image
                                        src={LinkedIn}
                                        alt="LinkedIn"
                                        className="Hero__Content__Overview__Links__Link"
                                    />
                                </a>
                                <a
                                    href="https://github.com/SenpaiSumpie"
                                    target="_blank"
                                    className="cursor-pointer Hero__Content__Overview__Links__Container"
                                >
                                    <Image
                                        src={Github}
                                        alt="Github"
                                        className="Hero__Content__Overview__Links__Link"
                                    />
                                </a>
                                <a
                                    href="mailto:max.lee.mosier@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer Hero__Content__Overview__Links__Container"
                                >
                                    <Image
                                        src={Email}
                                        alt="Github"
                                        className="Hero__Content__Overview__Links__Link"
                                    />
                                </a>
                                <span className="Hero__Email">
                                    max.lee.mosier@gmail.com
                                </span>
                            </div>
                            <img
                                alt="Tech Stack"
                                className="w-full h-auto"
                                src={
                                    'https://skillicons.dev/icons?i=js,html,css,react,typescript,figma,git,github,mysql,postgres,nextjs,nodejs,npm,sass,threejs,vercel,vscode,angular,azure,cs,cpp,docker,express,postman,stackoverflow,unreal,unity'
                                }
                            />
                        </div>
                        <div
                            className="Hero__Content__Image"
                            data-aos="fade-left"
                        >
                            <Image
                                src={MaxMosier}
                                alt="Max Mosier"
                                className="Hero__Content__Image__Picture"
                            />
                        </div>
                    </div>
                </ItemLayout>
                {/* <div className="Hero__TechStack" data-aos="fade-right">
                    <span className="Hero__TechStack__Intro">
                        {' '}
                        Tech Stack |
                    </span>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={HTML} alt="HTML" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={CSS} alt="CSS" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={TypeScript} alt="TypeScript" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={ReactLogo} alt="ReactLogo" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={NextJSLogo} alt="NextJSLogo" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={Tailwind} alt="Tailwind" />
                    </Tilt>
                    <Tilt className="Hero__TechStack__Logo">
                        <Image src={SCSSLogo} alt="Scss" />
                    </Tilt>
                </div> */}
            </div>
        </section>
    );
};

export default SectionWrapper(Hero, 'hero');
