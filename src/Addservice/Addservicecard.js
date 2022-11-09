import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Addservicecard = ({ newService }) => {
    const { img, name, price, description } = newService;
    return (
       
        <div className="card card-compact w-100 bg-base-100 shadow-xl">
        <figure>
            <PhotoProvider>
            <PhotoView src={img}>
            <img src={img} alt="Shoes" className='h-96' />
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
                <button className="btn btn-primary">Details</button>

            </div>
        </div>
    </div>

    );
};

export default Addservicecard;