import React from 'react';
import About from '../components/About';
import AllInOne from '../components/AllInOne';
import ExtraSection from '../components/ExtraSection';

import NewHero from '../components/NewHero';
import Services from '../components/Services';
import useTitle from '../Hooks/useTitle';
const Home = () => {
    useTitle('Home');
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