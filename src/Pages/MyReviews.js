import React, { useContext, useEffect, useState } from 'react';
import ReviewsCard from '../components/ReviewsCard';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../Hooks/useTitle';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('my-reviews');

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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('review-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='w-9/12 mx-auto'>
            {
                reviews.length === 0 ?
                    <h2 className='text-2xl bg-purple-300 font-semibold text-center w-3/5 mx-auto mt-20 py-1'>No review added</h2>
                :
                    <h2 className='text-2xl bg-purple-300 font-semibold text-center w-3/5 mx-auto my-3 py-1'> My reviews</h2>

            }
            {/* <h2 className='text-2xl'>reviews :{reviews.length }</h2> */}
           <div className='grid md:grid-cols-3 gap-3'>
            {
                    reviews.map(review => <ReviewsCard key={review._id} handleDelete={handleDelete} review={review}></ReviewsCard>)
            }
           </div>
        </div>
       
    );
};

export default MyReviews;