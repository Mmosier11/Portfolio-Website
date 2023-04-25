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
                    Front-End Developer |Cognizant | JUNE 22-Present<br/>
                    Senior Student technician | Joseph City high school | JUNE 21 - AUGUST 21<br/>
                    IT Help desk | United States Geological survey | JULY 19 - FEBRUARY 20<br/>
                    student technician | Norther Arizona university | JULY 18 - APRIL 19<br/>
                    IT Assistant | Joseph City High School | JUNE 16 - JULY 18
                    <br/>
                    <br/>
                    Bachelors of science in computer science | northern Arizona university | May 2022
                    <br/>
                    <br/>
                    google professional ux design | Coursera | JANUARY 23
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