import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dental-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='w-9/12 mx-auto flex flex-col justify-center'>
            <h2 className='text-2xl border- border-b-zinc-200 my-5 text-center font-semibold'>Your Trusted dentist Services</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>
            <Link to='/services'><button className='py-2 px-3 mt-5 self-center  '>Show All Services</button></Link>




        </div>
    );
};

export default Services;