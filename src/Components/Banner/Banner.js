import React from 'react';
import banner1 from '../../assets/images/banner-img-1.jpg'
import banner2 from '../../assets/images/banner-img-2.jpg'
import banner3 from '../../assets/images/banner-img-3.jpg'
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: banner1,
        title1: "Become",
        title2: "a professional",
        id: 1,
        prev: 3,
        next: 2
    },
    {
        image: banner2,
        title1: "Lift",
        title2: "up your game",
        id: 2,
        prev: 1,
        next: 3
    },
    {
        image: banner3,
        title1: "Become",
        title2: "a sharp shooter",
        id: 3,
        prev: 2,
        next: 1
    }
]

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                {
                    bannerData.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;