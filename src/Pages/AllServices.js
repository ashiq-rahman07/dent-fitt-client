import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Services from '../components/Services';
import useTitle from '../Hooks/useTitle';

const AllServices = () => {
  useTitle('allservices');
  const allService = useLoaderData();
    return (
      <div className='w-9/12 mx-auto flex flex-col justify-center'>
        <h2 className='text-2xl border- border-b-zinc-200 my-5 text-center font-semibold'>Your Trusted dentist Services</h2>
        <div className='grid md:grid-cols-3 gap-4'>
          {
            allService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }

        </div>




      </div>
    );
};

export default AllServices;