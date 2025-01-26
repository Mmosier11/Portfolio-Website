'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import '@/styles/App.scss';
import { SectionWrapper } from '../hoc';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { selectedWorks } from '../constants/constants';

//************ Link Images */
import GitHub from '../assets/github-mono.svg';
import LinkImg from '../assets/link.svg';
import FigmaLink from '../assets/figma-mono.svg';
import WorksLayout from './WorksLayout';

const SelectedWorks = () => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState('team-bandit');

    const updateSelected = (selected) => {
        setSelected(selected);
    };

    const handleClickedFalse = () => {
        setClicked(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
    }, []);

    return (
        <div className="SelectedWorks">
            <div data-aos="fade-up" className="SelectedWorks__SectionHeader">
                <h1 className="SelectedWorks__SectionHeader__SectionTitle">
                    {' '}
                    SELECTED WORKS{' '}
                </h1>
                <div className="SelectedWorks__SectionHeader__HorizontalDivider"></div>
            </div>
            <div className="SelectedWorks__SectionContent">
                {selectedWorks.map((work, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div
                                key={index}
                                className="SelectedWorks__SectionContent__Work"
                            >
                                <WorksLayout>
                                    <div
                                        className="SelectedWorks__SectionContent__Work__Image"
                                        data-aos="fade-right"
                                    >
                                        <Image
                                            src={work.image}
                                            alt="Selected Works Image"
                                            className="SelectedWorks__SectionContent__Work__Image__img"
                                        />
                                    </div>
                                    <div
                                        className="SelectedWorks__SectionContent__Work__Content"
                                        data-aos="fade-left"
                                    >
                                        <p className="SelectedWorks__SectionContent__Work__Content__Name">
                                            {' '}
                                            {work.name}{' '}
                                        </p>
                                        <p className="SelectedWorks__SectionContent__Work__Content__Blurb">
                                            {' '}
                                            {work.blurb}{' '}
                                        </p>
                                        <p className="SelectedWorks__SectionContent__Work__Content__About">
                                            {' '}
                                            {work.about}{' '}
                                        </p>
                                        <div className="SelectedWorks__SectionContent__Work__Content__Technologies">
                                            {work.technologies.map(
                                                (tech, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="SelectedWorks__SectionContent__Work__Content__Technologies__Tech"
                                                            style={{
                                                                backgroundColor: `${tech.primaryColor}`,
                                                                color: `${tech.textColor}`
                                                            }}
                                                        >
                                                            <p className="SelectedWorks__SectionContent__Work__Content__Tech__Technologies__Text">
                                                                {' '}
                                                                {tech.name}{' '}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>

                                        <div className="SelectedWorks__SectionContent__Work__Links">
                                            {work.githubLink !== '' ? (
                                                <a
                                                    href={work.githubLink}
                                                    target="_blank"
                                                    className={
                                                        work.githubLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        GitHub
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={GitHub}
                                                        alt="Github"
                                                    />
                                                </a>
                                            ) : (
                                                <div
                                                    className={
                                                        work.githubLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        GitHub
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={GitHub}
                                                        alt="Github"
                                                    />
                                                </div>
                                            )}
                                            {work.liveSiteLink !== '' ? (
                                                <a
                                                    href={work.liveSiteLink}
                                                    target="_blank"
                                                    className={
                                                        work.liveSiteLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Live Demo
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={LinkImg}
                                                        alt="Link"
                                                    />
                                                </a>
                                            ) : (
                                                <div
                                                    className={
                                                        work.liveSiteLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Live Demo
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={LinkImg}
                                                        alt="Link"
                                                    />
                                                </div>
                                            )}
                                            {work.figmaLink !== '' ? (
                                                <a
                                                    href={work.figmaLink}
                                                    target="_blank"
                                                    className={
                                                        work.figmaLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Figma Design
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={FigmaLink}
                                                        alt="Figma Link"
                                                    />
                                                </a>
                                            ) : (
                                                <div
                                                    className={
                                                        work.figmaLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Figma Design
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={FigmaLink}
                                                        alt="Figma Link"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </WorksLayout>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={index}
                                className="SelectedWorks__SectionContent__Reverse"
                            >
                                <WorksLayout>
                                    <div
                                        className="SelectedWorks__SectionContent__Work__Content"
                                        data-aos="fade-right"
                                    >
                                        <p className="SelectedWorks__SectionContent__Work__Content__Name">
                                            {' '}
                                            {work.name}{' '}
                                        </p>
                                        <p className="SelectedWorks__SectionContent__Work__Content__Blurb">
                                            {' '}
                                            {work.blurb}{' '}
                                        </p>
                                        <p className="SelectedWorks__SectionContent__Work__Content__About">
                                            {' '}
                                            {work.about}{' '}
                                        </p>
                                        <div className="SelectedWorks__SectionContent__Work__Content__Technologies">
                                            {work.technologies.map(
                                                (tech, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="SelectedWorks__SectionContent__Work__Content__Technologies__Tech"
                                                            style={{
                                                                backgroundColor: `${tech.primaryColor}`,
                                                                color: `${tech.textColor}`
                                                            }}
                                                        >
                                                            <p className="SelectedWorks__SectionContent__Work__Content__Tech__Technologies__Text">
                                                                {' '}
                                                                {tech.name}{' '}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>

                                        <div className="SelectedWorks__SectionContent__Work__Links">
                                            {work.githubLink !== '' ? (
                                                <a
                                                    href={work.githubLink}
                                                    target="_blank"
                                                    className={
                                                        work.githubLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        GitHub
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={GitHub}
                                                        alt="Github"
                                                    />
                                                </a>
                                            ) : (
                                                <div
                                                    className={
                                                        work.githubLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        GitHub
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={GitHub}
                                                        alt="Github"
                                                    />
                                                </div>
                                            )}
                                            {work.liveSiteLink !== '' ? (
                                                <a
                                                    href={work.liveSiteLink}
                                                    target="_blank"
                                                    className={
                                                        work.liveSiteLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Live Demo
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={LinkImg}
                                                        alt="Link"
                                                    />
                                                </a>
                                            ) : (
                                                <div
                                                    className={
                                                        work.liveSiteLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Live Demo
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={LinkImg}
                                                        alt="Link"
                                                    />
                                                </div>
                                            )}
                                            {work.figmaLink !== '' ? (
                                                <a
                                                    href={work.figmaLink}
                                                    target="_blank"
                                                    className={
                                                        work.figmaLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Figma Design
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={FigmaLink}
                                                        alt="Figma Link"
                                                    />
                                                </a>
                                            ) : (
                                                <div
                                                    className={
                                                        work.figmaLink !== ''
                                                            ? 'SelectedWorks__SectionContent__Work__Links__ActiveLink'
                                                            : 'SelectedWorks__SectionContent__Work__Links__DisabledLink'
                                                    }
                                                >
                                                    <p className="SelectedWorks__SectionContent__Work__Links__Link__Text">
                                                        Figma Design
                                                    </p>
                                                    <Image
                                                        className="SelectedWorks__SectionContent__Work__Links__Link__Image"
                                                        src={FigmaLink}
                                                        alt="Figma Link"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="SelectedWorks__SectionContent__Work__Image"
                                        data-aos="fade-left"
                                    >
                                        <Image
                                            src={work.image}
                                            alt="Selected Works Image"
                                            className="SelectedWorks__SectionContent__Work__Image__img"
                                        />
                                    </div>
                                </WorksLayout>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default SectionWrapper(SelectedWorks, 'works');
