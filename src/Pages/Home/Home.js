import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SimpleCarousel from '../../Components/CarouselSwiper/SimpleCarousel';
import ServiceBanner from '../../Components/ServiceBanner/ServiceBanner';

// import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceBanner></ServiceBanner>
            <SimpleCarousel></SimpleCarousel>
        </div>
    );
};

export default Home;