import React from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import Me from '../Me/Me';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <About></About>
            <Me></Me>
        </div>
    );
};

export default Home;