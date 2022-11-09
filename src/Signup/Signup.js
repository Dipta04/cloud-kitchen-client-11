import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Usetitle from '../Hooks/Usetitle';

const Signup = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    Usetitle('Signup')
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;

            const currentUser = {
                email: user.email
            }

            console.log(currentUser);
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('kitchen-token', data.token);
                    navigate(from, { replace: true });
                });

        })
        .catch(error => console.error(error));

    }


    return (
        
        <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up!</h1>
                <p className="py-6">Don't have any account yet.Please sign up and make your own account.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline btn-primary font-bold" type="submit" value="SignUp" />
                    </div>
                    
                    <p>Already have an account! Please<Link className='btn btn-active btn-link' to='/login'>LogIn</Link>then..</p>
                </form>
               

            </div>
        </div>
    </div>

    );
};

export default Signup;