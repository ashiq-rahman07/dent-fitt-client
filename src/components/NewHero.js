import React from 'react';
import { Link } from 'react-router-dom';

const NewHero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/phXm5xQ/den-bg.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Your great smile begins with a great dentist</h1>
                    <p className="mb-5 ">Welcome to Bowles Dental, where you’ll find high-quality dental care for your whole family. From your dentists, Drs. Chad Bowles and Brad Higgerson, to your hygienist and front office team, everyone here is committed to exceeding your expectations.</p>
                    <Link to='/services'><button className="btn btn-primary">Get Services</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default NewHero;