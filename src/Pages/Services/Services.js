import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useTitle('Services');

    const [loading, setLoading] = useState(true);

    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch(`https://game-master-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setLoading(false)
            })
    }, [])

    // const allServices = useLoaderData();
    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl my-10'>Services</h1>
            {
                loading ?
                    <>
                        <progress className="progress progress-accent w-full"></progress>
                    </>
                    :
                    <>
                        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                            {
                                allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                    </>
            }
        </div >
    );
};

export default Services;