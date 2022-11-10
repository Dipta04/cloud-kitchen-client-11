import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Addservicecard from './Addservicecard';

const Addservice = () => {

    const {user,logOut} = useContext(AuthContext);
    const [newServices,setnewServices] = useState([]);

    useEffect(() => {
        fetch(`https://cloud-kitchen-server-two.vercel.app/newservices/?email=${user?.email}`, {
            headers: {
                 authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
              }
        })
            .then(res => {
              if(res.status === 401 || res.status === 403)
              {
                return logOut()
              }
              return res.json();
            })
            .then(data => {
                setnewServices(data);
            })
    }, [user?.email, logOut])

   

    return (
        <div>
            {
                newServices.map(newService=><Addservicecard
                key={newService._id}
                newService={newService}
                ></Addservicecard>)
            }
        </div>
    );
};

export default Addservice;