import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Usetitle from '../../Hooks/Usetitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetail = () => {
    Usetitle('Service-detail')
    const {_id, name, image, price, description, review } = useLoaderData()
    const {user} = useContext(AuthContext);
    return (
        <div className='mb-3'>
            <div className="card card-compact w-100 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                    <PhotoView src={image}>
                    <img src={image} alt="Shoes" className='h-96' />
                    </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p className='text-2xl text-black-600 font-semibold'>
                        {
                            description
                        }
                    </p>
                    <div className="card-actions justify-end">
                        <Link to='/'>
                        <button className="btn btn-primary">Go to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full mt-4">

                <table className="table w-full">
                  
                    <thead>
                        <tr>
                            <th>
                
                            </th>
                            <th className='font-bold'>Name</th>
                            <th className='font-bold'>review</th>
                            <th className='font-bold'>Favorite Food</th>
                            <th>Star</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <th>
                            
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={review.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{review.name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                              <p>{review.text}</p> 
                
                            </td>
                            <td>{name}</td>
                            <th>
                                (4.1)<button className="btn btn-ghost btn-xs"><FaStar className='text-warning'></FaStar></button>
                            </th>
                        </tr>
                    
                    </tbody>

                </table>
            </div>
            <div>
               {
                user?.uid
                ?
               <button className='btn mt-5'><Link to={`/reviewform/${_id}`}>Add my review</Link></button>
                 :
               <p>You have to <button className="btn btn-link"><Link to='/login'>Login</Link></button> to add your review</p>
            
               }
             </div>

        </div>
    );
};

export default ServiceDetail;