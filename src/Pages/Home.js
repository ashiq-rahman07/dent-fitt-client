import React from 'react';
import About from '../components/About';
import AllInOne from '../components/AllInOne';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Services></Services>
           <About></About> 
           <AllInOne></AllInOne>
        </div>
    );
};

export default Home;