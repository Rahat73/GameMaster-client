import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SimpleCarousel from '../../Components/CarouselSwiper/SimpleCarousel';
import ServiceBanner from '../../Components/ServiceBanner/ServiceBanner';
import StayConnected from '../../Components/StayConnected/StayConnected';
import useTitle from '../../hook/useTitle';

// import './Home.css';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ServiceBanner></ServiceBanner>
            <SimpleCarousel></SimpleCarousel>
            <StayConnected></StayConnected>
        </div>
    );
};

export default Home;