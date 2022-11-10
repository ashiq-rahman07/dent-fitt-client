import React from 'react';
import About from '../components/About';
import AllInOne from '../components/AllInOne';
import ExtraSection from '../components/ExtraSection';
import Hero from '../components/Hero';
import NewHero from '../components/NewHero';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
           
           <NewHero></NewHero>
           <Services></Services>
           <ExtraSection></ExtraSection>
           <About></About> 

           <AllInOne></AllInOne>
        </div>
    );
};

export default Home;