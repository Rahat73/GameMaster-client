import React from 'react';
import { HiOutlineCurrencyDollar, HiStar, HiUserGroup } from "react-icons/hi";
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();
    const { _id, title, img, price, rating, description, users } = serviceDetails;
    console.log(title)
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img}})` }}>
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
        </div>
    );
};

export default ServiceDetails;