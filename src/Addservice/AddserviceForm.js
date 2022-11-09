import React from 'react';
import toast from 'react-hot-toast';


const AddserviceForm = () => {
    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;

        const newService = {
            img,
            name,
            price,
            description
        }

        fetch('http://localhost:5000/newservices', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
              },
              body: JSON.stringify(newService) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged)
            {
                toast.success('Service placed successfully')
                form.reset();

            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <form onSubmit={handlePlaceService}>
                <input type="url" name='img' placeholder="Type here" className="input input-bordered w-full mt-5 mb-5" required/>
                <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full mb-5" required/>
                <input type="text" name='price' placeholder="Type here" className="input input-bordered w-full mb-5" required/>
                <input type="text" name='description' placeholder="Type here" className="input input-bordered w-full mb-5" required/>
                <input className='btn mb-5' type="submit" value="Place Your Service" />
            </form>
        </div>
    );
};

export default AddserviceForm;