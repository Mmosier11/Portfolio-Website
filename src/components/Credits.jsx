import React from 'react'

import { SectionWrapper } from '../hoc';

const Credits = () => {
    return (
        <div className="Credits">
            <div className="Credits__Header">
                <h1 className="Credits__Header__Title"> CREDITS </h1>
                <div className="Credits__Header__HorizontalDivider"></div>
            </div>
            <div className="Credits__Content">
                <p className="Credits__Content__Sections">
                    Work History
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    education
                    <br/>
                    <br/>
                    certificates
                    {/* <br/>
                    <br/>
                    interests */}
                </p>
                <p className="Credits__Content__Text">
                    Front-End Developer | Cognizant | June 22-Present<br/>
                    Senior Student Technician | Joseph City High School | June 21 - August 21<br/>
                    IT Help Desk | United States Geological Survey | July 19 - February 20<br/>
                    Student Technician | Norther Arizona University | July 18 - April 19<br/>
                    IT Assistant | Joseph City High School | June 16 - July 18
                    <br/>
                    <br/>
                    Bachelors of Science in Computer Science | Northern Arizona University | May 22
                    <br/>
                    <br/>
                    Google Professional UX Design | Coursera | January 23
                    {/* <br/>
                    <br/>
                    Board games<br/>
                    video games<br/>
                    TV shows<br/>
                    movies<br/>
                    Books<br/>
                    80s Synthwave<br/> */}
                </p>  
            </div> 
        </div>
    );
}

export default SectionWrapper(Credits, 'Credits');