import React, { useEffect, useState } from 'react';
import Allservicecard from './Allservicecard';


const Allservice = () => {
    const [allservices, setallServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setallServices(data))
    }, [])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3 mb-3'>
               {
                   allservices.map(service => <Allservicecard
                   key={service._id}
                   service={service}
                   ></Allservicecard>)
                }
        </div>
    );
};

export default Allservice;