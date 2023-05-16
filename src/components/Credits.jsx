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
                    WORK HISTORY
                </p>
                <p className="Credits__Content__Text">
                    Front-End Developer | Cognizant | June '22 - Present<br/>
                    Senior Student Technician | Joseph City High School | June '21 - August '21<br/>
                    IT Help Desk | United States Geological Survey | July '19 - February '20<br/>
                    Student Technician | Norther Arizona University | July '18 - April '19<br/>
                    IT Assistant | Joseph City High School | June '16 - July '18
                </p>
                <p className="Credits__Content__Sections">
                    EDUCATION
                </p>
                <p className="Credits__Content__Text">
                    Bachelors of Science in Computer Science | Northern Arizona University | May '22
                </p>
                <p className="Credits__Content__Sections">
                    CERTIFICATIONS
                </p>
                <p className="Credits__Content__Text">
                    Google Professional UX Design | Coursera | January '23
                </p>  
            </div> 
        </div>
    );
}

export default SectionWrapper(Credits, 'credits');