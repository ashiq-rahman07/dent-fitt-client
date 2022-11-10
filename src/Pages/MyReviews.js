import React, { useContext, useEffect, useState } from 'react';
import ReviewsCard from '../components/ReviewsCard';
import { AuthContext } from '../contexts/AuthProvider';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
               return res.json()
            })

            .then(data => {
                setReviews(data)
            })

    }, [user?.email, logOut])

    return (
        <div className='w-9/12 mx-auto'>
            <h2 className='text-2xl'>reviews :{reviews.length}</h2>
           <div className='grid md:grid-cols-3 gap-3'>
            {
                reviews.map(review=><ReviewsCard key={review._id} review={review}></ReviewsCard>)
            }
           </div>
        </div>
       
    );
};

export default MyReviews;