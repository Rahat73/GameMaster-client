import React from 'react';
import { HiOutlineCurrencyDollar, HiStar, HiUserGroup } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price, rating, users, description } = service;

    let slicedTxt;
    if (description.length > 100) {
        slicedTxt = description.slice(0, 100) + '...';
    }
    else
        slicedTxt = description;

    return (
        <div className='py-10'>
            <div className="group card bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-xl rounded-2xl hover:shadow-lg hover:shadow-red-600 transition ease-in-out hover:scale-105">
                <figure><PhotoProvider>
                    <PhotoView src={img}>
                        <img className='transition duration-300 ease-in-out group-hover:scale-125' src={img} alt="ServiceCard" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-start'>{slicedTxt}</p>
                    <div className="pt-5 card-actions justify-between items-center">
                        <div className='flex'><HiOutlineCurrencyDollar className='text-2xl text-amber-200 mx-2'></HiOutlineCurrencyDollar><span>{price}</span></div>
                        <div className='flex'><HiStar className='text-2xl text-warning mx-2'></HiStar><span>{rating}</span></div>
                        <div className='flex'><HiUserGroup className='text-2xl text-warning mx-2'></HiUserGroup><span>{users}</span></div>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/serviceDetails/${_id}`}>
                            <button className="btn btn-outline btn-secondary btn-sm lg:btn-md"><span className='text-white capitalize'>View Details</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;