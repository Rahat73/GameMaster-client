import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { HiOutlineCurrencyDollar, HiStar, HiUserGroup } from "react-icons/hi";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import ItemReviews from '../../Components/ItemReviews/ItemReviews';
import useTitle from '../../hook/useTitle';

const ServiceDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useTitle('Service Details');

    const serviceDetails = useLoaderData();
    const { _id, title, img, price, rating, description, users } = serviceDetails;

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://game-master-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id, reviews])

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewDescValue = form.reviewDesc.value;

        let reviewRateValue;
        if (form.rating.value === "") {
            reviewRateValue = "5";
        }
        else {
            reviewRateValue = form.rating.value;
        }

        const review = {
            serviceID: _id,
            serviceName: title,
            serviceImg: img,
            userID: user?.uid,
            userName: user?.displayName,
            userImg: user?.photoURL,
            reviewDesc: reviewDescValue,
            reviewRate: reviewRateValue
        }

        // console.log(review)

        fetch('https://game-master-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Review added successfully.');
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url(${img}})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
                        <p className="mb-5 text-white ">{description}</p>
                        <div className="py-5 card-actions justify-center items-center">
                            <div className='flex'><HiOutlineCurrencyDollar className='text-2xl text-warning mx-2'></HiOutlineCurrencyDollar><span className='text-white'>{price}</span></div>
                            <div className='flex'><HiStar className='text-2xl text-warning mx-2'></HiStar><span className='text-white'>{rating}</span></div>
                            <div className='flex'><HiUserGroup className='text-2xl text-warning mx-2'></HiUserGroup><span className='text-white'>{users}</span></div>
                        </div>
                        <button className="btn btn-primary border border-red-200 capitalize">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='py-5 grid grid-cols-1 lg:grid-cols-6 bg-red-500 bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <div className='col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 border-r border-red-500'>
                    {
                        reviews.map(review => <ItemReviews
                            key={review._id}
                            review={review}
                        >
                        </ItemReviews>)
                    }
                </div>
                <div className='col-span-1 lg:col-span-2'>
                    {
                        user?.uid ?
                            <>
                                <form onSubmit={handleReview}>
                                    <div className="form-control w-11/12 mx-auto">
                                        <label className="label">
                                            <span className="label-text">{user?.displayName}</span>
                                            <span className="label-text-alt">{user?.email}</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered h-24" name='reviewDesc' placeholder="Enter your review" required></textarea>
                                        <div className="rating mt-5 mx-auto">
                                            <input type="radio" value='1' name="rating" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" value='2' name="rating" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" value='3' name="rating" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" value='4' name="rating" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" value='5' name="rating" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div>
                                            <button className='btn btn-outline btn-secondary border border-slate-400 mt-10 mb-5 capitalize' type='submit'><p className='text-white'>Submit Review</p></button>
                                        </div>
                                    </div>
                                </form>
                            </>
                            :
                            <>
                                <h1 className='text-2xl font-semibold'>Please Login to add a review</h1>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;