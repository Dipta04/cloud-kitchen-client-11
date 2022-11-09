import React, { useEffect, useState } from 'react';

const MyreviewRow = ({review,handleDelete,handleUpdate}) => {

        const {_id,FoodserviceName,customer, price, message} = review;
        const [reviewService,setReviewService]=useState({});

        useEffect(() => {
            fetch(`http://localhost:5000/reviews'/${review}`)
                .then(res => res.json())
                .then(data => setReviewService(data))
        }, [review])

    return (

        <tr>
            <th>
                <label>
                   <button onClick={()=>handleDelete(_id)} className='btn btn-primary'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle">
                    
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        
                    </div>
                </div>
            </td>
            <td>
            {message}
            </td>
            <td>{FoodserviceName}</td>
            <td>{price}</td>
            <th>
                <button onClick={()=>handleUpdate(_id)} className="btn btn-primary">Edit</button>
            </th>
        </tr>

    );
};

export default MyreviewRow;