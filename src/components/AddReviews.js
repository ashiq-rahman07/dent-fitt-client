import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const AddReviews = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { name, title, fee, _id } = service
    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const authorName = form.authorName.value;
        const authorImg = form.authorImg.value;
        const email = user?.email || 'unregistered';
        const ratings = form.ratings.value;
        const reviewText = form.review.value;

        const reviews = {
            service: _id,
            serviceName: name,
            fee,
            author: authorName,
            email,
            authorImg,
            ratings,
            reviewText
        }

        fetch('https://dental-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form className='w-3/5  mx-auto' onSubmit={handleAddReview}>
                <h2 className="text-2xl bg-purple-400 text-center w-3/5 mx-auto my-3 rounded-lg font-semibold px-2">Please add review for this: {name} service</h2>
                {/* <h4 className="text-3xl">Price: ${fee}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="authorName" type="text" placeholder="author Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" />
                    <input name="authorImg" defaultValue={user?.photoURL} type="text" placeholder="author image url" className="input input-ghost w-full  input-bordered" required />
                    <input name="ratings" type="text" placeholder="ratings" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your review" required></textarea>

                <input className='btn' type="submit" value="Add Your Review" />
            </form>
        </div>
    );
};

export default AddReviews;