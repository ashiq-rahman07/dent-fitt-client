import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import AddReviews from './AddReviews';
import ReviewsCard from './ReviewsCard';
import ServiceReviewCard from './ServiceReviewCard';

const Service = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    console.log(service)
    const [serviceReview, setServiceReview] = useState([])
    const { img, name, title, description, _id } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/service-reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setServiceReview(data))
    }, [_id])
    return (
        <div>
            <h2 className='text-xl text-center my-5 bg-purple-300 w-2/5 mx-auto py-1 font-semibold text-gray-900'>{name}</h2>
            <div className="hero  bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-50'>
                        <img className='w-full' src={img} alt="" />
                    </div>

                    <div className='w-4/6'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <h2 className='text-center bg-purple-300 w-2/5 py-1 text-xl mx-auto font-semibold px-2 rounded-lg shadow-lg my-5 '>Happy Patient Reviews</h2>
            <div className='grid md:grid-cols-3 w-3/5 gap-5 mx-auto my-5'>
                {
                    serviceReview.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
            <div>

                {
                    user?.uid ?
                        <div>
                           
                            <AddReviews service={service}></AddReviews>
                        </div>
                        :
                        <div className='text-center bg-purple-300 w-2/5 mx-auto py-2 rounded-md shadow-lg'>
                            <h2 className='text-2xl font-semibold '> Please Sign in for add your reviews</h2>
                            
                        </div>

                }
            </div>
        </div>
    );
};

export default Service;