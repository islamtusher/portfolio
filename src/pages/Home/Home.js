import React from 'react';
import Contact from '../Contact/Contact';
import HeroArea from '../HeroArea/HeroArea';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;