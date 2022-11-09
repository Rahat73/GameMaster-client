import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Pages/Services/ServiceCard';

const ServiceBanner = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serviceBanner')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);

    return (
        <div>
            <div className='my-10  bg-red-600 bg-opacity-70 bg-clip-padding backdrop-filter backdrop-blur-md'>
                <div className='w-10/12 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;