import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Pages/Services/ServiceCard';

const ServiceBanner = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceBanner')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='my-10 pt-10 bg-red-600 bg-opacity-70 bg-clip-padding backdrop-filter backdrop-blur-md'>
                <h1 className='text-5xl font-semibold underline'>Services</h1>
                <div className='w-10/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link className='btn btn-outline btn-primary border border-red-400 capitalize mb-10' to='/services'><span className='text-white'>View All</span></Link>
            </div>
        </div>
    );
};

export default ServiceBanner;