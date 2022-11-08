import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { login,googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);
                fetch('https://genius-car-server-kappa.vercel.app/jwt', {
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

    const handleGoogleSignin=()=>{
        googleSignIn()
        .then(result => {
            const user = result.user;

            const currentUser = {
                email: user.email
            }

            console.log(currentUser);
            fetch('https://genius-car-server-kappa.vercel.app/jwt', {
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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">After you login you can place your orders.You can also add your own review.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn btn-outline btn-primary font-bold" type="submit" value="Login" />
                        </div>
                        <button onClick={handleGoogleSignin} className='btn btn-outline btn-success font-bold'>Google</button>
                        <p>New at my cloud kitchen! Please<Link className='btn btn-active btn-link' to='/signup'>Sign Up</Link>first..</p>
                    </form>
                   

                </div>
            </div>
        </div>
    );
};

export default Login;