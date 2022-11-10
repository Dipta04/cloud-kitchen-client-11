import React, { useEffect, useState } from 'react';
import Addservice from '../../Addservice/Addservice';
import Allservicecard from './Allservicecard';


const Allservice = () => {
    const [allservices, setallServices] = useState([]);
    
    useEffect(() => {
        fetch('https://cloud-kitchen-server-two.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setallServices(data))
    }, [])

    return (  
        <div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3 mb-3'>
               {
                   allservices.map(service => <Allservicecard
                   key={service._id}
                   service={service}
                   ></Allservicecard>)
                }
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3 mb-3'>
            <Addservice></Addservice>
        </div>
        </div>
        
    );
};

export default Allservice;