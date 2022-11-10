import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const AddServices = () => {
    const [service, setService] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        console.log(service);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }

    return (
        <section className="p-6 mt-3 w-3/5 mx-auto bg-gray-400 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleAddUser} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Add Your Service</p>
                        <p className="text-lg">please add service name, service title,also image url and description</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="service-name" className="text-sm">Service Name</label>
                            <input onBlur={handleInputBlur} name="name" type="text" placeholder="Service name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="service-title" className="text-sm">Service Title</label>
                            <input onBlur={handleInputBlur} name="title" type="text" placeholder="Service title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="image-url" className="text-sm">Image Url</label>
                            <input onBlur={handleInputBlur} name="img" type="text" placeholder="Image Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Description</label>
                            
                            <input onBlur={handleInputBlur} type="text" name="description" placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 "/>
                        </div>
                       
                    </div>
                </fieldset>
               <button className='bg-indigo-800' type='submit'>Add Service</button>
            </form>
        </section>
    );
};

export default AddServices;