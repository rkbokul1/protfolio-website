import React from 'react';
import Footer from '../Home/Footer';
import Services from '../Home/Services';
import AboutMe from './AboutMe';

const About = () => {
    return (
        <div className='bg-black'>
            <AboutMe/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default About;