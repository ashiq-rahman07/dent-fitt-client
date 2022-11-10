import React from 'react';

const ReviewsCard = ({review}) => {
  
    const { reviewText, ratings, email, author, fee, serviceName, service, _id, authorImg
 } = review;
    return (
        <div className='bg-slate-300 p-4 rounded-3xl shadow-md'>
            <h2 className='text-center font-semibold'>{serviceName}</h2>
            <div className='flex items-center gap-3'>
                <img className='w-32 rounded-full' src={authorImg} alt="" />
                <div>
                    <h2 className='font-semibold'>{author}</h2>
                </div>
                
            </div>
            <div>
                <p>{reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;