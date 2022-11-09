import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
     
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/serviceshome')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3'>
               {
                   services.map(service => <ServiceCard
                   key={service._id}
                   service={service}
                   ></ServiceCard>)
                }
                </div>
                <div className='text-center'>
                <Link to='/services'><button className="btn btn-primary w-52 mt-3">See all</button></Link>
                </div>
        </div>
    );
};

export default Services;