import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {

    useTitle('Services');

    const [loading, setLoading] = useState(true);

    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setLoading(false)
            })
    }, [])

    // const allServices = useLoaderData();
    return (
        <div className='min-h-screen'>
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