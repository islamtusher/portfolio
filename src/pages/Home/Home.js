import React from 'react';
import Contact from '../Contact/Contact';
import HeroArea from '../HeroArea/HeroArea';
import Projects from '../Projects/Projects';
import About from './About/About';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <HeroArea></HeroArea>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;