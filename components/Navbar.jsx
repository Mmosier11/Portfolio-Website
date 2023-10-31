'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { styles } from '@/hoc/styles';
import { navLinks } from '@/constants/constants';
import { menu, close } from '@/assets';

import '@/styles/App.scss';

//******** AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Navbar(){
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100
        });
    }, []);

    return (
        <div
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
        >
            <div
                className="w-full flex justify-between items-center max-w-7xl mx-auto"
                data-aos="fade-down"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 z-20 Footer__Text__Name"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white cursor-pointer flex Footer__Text__Name">
                        {' '}
                        Max Mosier{' '}
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer ${
                                active === link.id
                                    ? 'text-white'
                                    : 'text-secondary'
                            } hover:text-white text-[18px] font-medium`}
                            onClick={() => {
                                setActive(link.id);
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-0 right-0 my-2 w-full z-10`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4 mt-10">
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer ${
                                        active === link.id
                                            ? 'text-white'
                                            : 'text-secondary'
                                    } font-montserrat hover:text-white text-[16px] font-medium`}
                                    onClick={() => {
                                        setActive(link.id);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};