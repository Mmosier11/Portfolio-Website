import React from 'react'

import { SectionWrapper } from '../hoc';

const OtherWorks = () => {
    return (
        <div className="OtherWorks">
            <div className="OtherWorks__Header">
                <h1 className="OtherWorks__Header__Title"> OTHER WORKS </h1>
                <div className="OtherWorks__Header__HorizontalDivider"></div>
            </div>
            <div className="OtherWorks__Content">
                <div className="OtherWorks__Content__Inside">
                
                    <p className="OtherWorks__Content__Inside__List">
                        <span className="OtherWorks__Content__Inside__List__Title">live website projects</span>
                        <br/>
                        Netflix Clone<br/>
                        Web 3.0 Blockchain App<br/>
                        Admin Dashboard <br/>
                        ECommerce Web Shop<br/>
                        Web 3 NFT Card Game<br/>
                        Spline and 3JS Website<br/>
                        Restaurant Web Application<br/>
                        Realtime Chat Messaging<br/>
                        Spotify Clone<br/>
                        YouTube Clone<br/>
                        Social Media App<br/>
                        Chat GPT Clone<br/>
                        A.I. and Three JS Store<br/>
                        A.I. Image Generation App <br/>
                        T3 Stack Twitter Clone
                    </p>
                    <div className="OtherWorks__Content__Inside__Divider"></div>
                    <p className="OtherWorks__Content__Inside__List">
                        <span className="OtherWorks__Content__Inside__List__Title">Figma Projects</span>
                        <br/>
                        Parallax Scroll with AI<br/>
                        A.I. Web Design # 1<br/>
                        A.I. Web Design # 2<br/>
                        Discord Clone<br/>
                        Sports Team Manager
                    </p>
                    <div className="OtherWorks__Content__Inside__Divider"></div>
                    <p className="OtherWorks__Content__Inside__List">
                        <span className="OtherWorks__Content__Inside__List__Title">archived</span>
                        <br/>
                        Portfolio Project V1
                        <br/>
                        <span className="OtherWorks__Content__Inside__List__Title">Codepens</span>
                        <br/>
                        User Sign Up
                        Fire Game
                        Sabacc
                    </p>
                </div>
            </div>
        </div>
    );
}
export default SectionWrapper(OtherWorks, 'OtherWorks');