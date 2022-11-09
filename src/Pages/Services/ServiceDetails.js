import React from 'react';
import { HiOutlineCurrencyDollar, HiStar, HiUserGroup } from "react-icons/hi";
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();
    const { _id, title, img, price, rating, description, users } = serviceDetails;

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewDesc = form.reviewDesc.value;
        const reviewRate = form.rating.value;
        console.log(reviewDesc, reviewRate)
        form.reset();
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
            <div className='py-5 grid grid-cols-6 bg-red-500 bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <div className='col-span-4 border-r border-red-500'>Reviews</div>
                <div className='col-span-2'>
                    <form onSubmit={handleReview}>
                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text">Your bio</span>
                                <span className="label-text-alt">Alt label</span>
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
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;