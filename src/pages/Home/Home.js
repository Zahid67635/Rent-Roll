import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import About from '../About/About';
import Acordian from './Acordian';
import Contact from './Contact';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                <About></About>
            </AnimationOnScroll>
            <Acordian></Acordian>
            <Contact></Contact>
        </div >
    );
};

export default Home;