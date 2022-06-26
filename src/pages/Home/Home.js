import React from 'react';
import Contact from '../Contact/Contact';
import HeroArea from '../HeroArea/HeroArea';
import Projects from '../Projects/Projects';
import About from './About/About';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div className=''>
            <HeroArea></HeroArea>
            <Skills></Skills>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;