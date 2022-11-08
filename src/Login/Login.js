import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

   const {login} = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();

    return (
        <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">After you login you can place your orders.You can also add your own review.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body">
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
                        <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;