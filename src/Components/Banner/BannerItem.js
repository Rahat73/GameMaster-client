import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next, title1, title2 } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className='absolute lg:text-7xl uppercase font-extrabold text-white text-start z-10 translate-x-1/3 top-1/4'>{title1} <br /> {title2}</h1>
                </div>
                <div className='carouselImg'>
                    <img src={image} alt='featured' className='opacity-90' />
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;