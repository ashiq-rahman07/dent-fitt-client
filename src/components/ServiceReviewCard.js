import React from 'react';

const ServiceReviewCard = ({ review }) => {
    const { reviewText, ratings, email, author, fee, serviceName, service, _id, authorImg
    } = review;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={authorImg} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>{reviewText}</p>
               
            </div>
        </div>
    );
};

export default ServiceReviewCard;