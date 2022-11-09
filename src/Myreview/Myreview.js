import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Usetitle from '../Hooks/Usetitle';
import MyreviewRow from './MyreviewRow';

const Myreview = () => {
    Usetitle('Myreview');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }

    }

    const handleUpdate = id => {

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
    }
     
    if(reviews.length===0)
    {
        return <h1 className='font bold text-5xl mt-80 mb-40 ml-96 italic'>No reviews were added</h1>
    }

    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Food</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
        
                         reviews.map(review=><MyreviewRow
                         key={review._id}
                         review={review}
                         handleDelete={handleDelete}
                         handleUpdate={handleUpdate}
                         ></MyreviewRow>)
                         
                       }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Myreview;