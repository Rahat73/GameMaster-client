import React from 'react';
import { HiStar } from "react-icons/hi";

const ItemReviews = ({ review }) => {
    const { userName, userImg, reviewDesc, reviewRate } = review;
    return (
        <div className=' w-10/12 mx-auto my-3 bg-black flex justify-start items-center border border-red-500'>
            <img className='mask mask-squircle mx-3' src={userImg} alt="" />
            <div className='flex flex-col justify-start'>
                <h1>Name: {userName}</h1>
                <h1 className='text-start'>{reviewDesc}</h1>
                <div className='flex items-center'><HiStar></HiStar><h1>{reviewRate}</h1></div>
            </div>
        </div>
    );
};

export default ItemReviews;