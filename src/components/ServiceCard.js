import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, title, _id, img, fee, description } = service;
    return (
        <div className="max-w-xl relative p-6 rounded-md shadow-lg bg-slate-200 dark:bg-gray-900 dark:text-gray-50">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>

            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{name}</span>
                <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
            </div>
            <p className="dark:text-gray-100 pb-4">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            
            <Link to={`/services/${_id}`}><button className='absolute bottom-0 bg-slate-500 px-5'>Details</button></Link>
            
        </div>
    );
};

export default ServiceCard;