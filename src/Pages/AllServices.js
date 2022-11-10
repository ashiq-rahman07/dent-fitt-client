import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Services from '../components/Services';

const AllServices = () => {
  const allService = useLoaderData();
    return (
      <div className='w-9/12 mx-auto flex flex-col justify-center'>
        <h2 className='text-5xl text-center'>services: {allService.length}</h2>
        <div className='grid md:grid-cols-3 gap-4'>
          {
            allService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }

        </div>




      </div>
    );
};

export default AllServices;