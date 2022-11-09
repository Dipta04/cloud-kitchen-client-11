import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Usetitle from '../Hooks/Usetitle';

const Reviewform = () => {
    Usetitle('Reviewform');
    const {_id,name,price}= useLoaderData();
    const {user} = useContext(AuthContext);
   
    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            Foodservice: _id,
            FoodserviceName: name,
            price,
            customer: username,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
              },
              body: JSON.stringify(review) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged)
            {
                toast.success('Review placed successfully');
                form.reset();
            }
        })
        .catch(error => console.error(error));

    }

    return (
         <div>
            <form onSubmit={handleReview}>
                <h1 className='font-bold text-center mt-4'>Food Service Name:{name}</h1>
                <h2 className='font-bold text-center mb-4'>Price:${price}</h2>
            <div>
            <input name='username' type="text" placeholder="Name" className="input input-ghost w-full input-bordered mb-4" />
            <input name='email' type="email" placeholder="email" className="input input-ghost w-full input-bordered mb-4" />
            <input name='message' type="text" placeholder="review" className="input input-ghost w-full input-bordered mb-4" />
            </div>
            <input className='btn btn-primary mb-3' type="submit" value="Place Your review" />
            </form>
            
         </div>
    );
};

export default Reviewform;