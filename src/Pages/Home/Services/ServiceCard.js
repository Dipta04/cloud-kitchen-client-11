import React from 'react';

const ServiceCard = ({service}) => {
    const {name,image,price,description} = service;
    return (
        <div className="card card-compact w-100 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" className='h-96'/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
            <p className='text-2xl text-black-600 font-semibold'>
                {
                     description.length>100 
                     ?
                     <>{description.slice(0, 70) + '...'}  More</>
                     :
                     description
                }
            </p>
            <div className="card-actions justify-end">
                {/* <Link to={`/checkout/${_id}`}> */}
                    <button className="btn btn-primary">Checkout</button>
                {/* </Link> */}
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;