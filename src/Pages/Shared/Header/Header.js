import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blogs</Link></li>
        {
            user?.email
                ?
                <>
                    <li className='font-semibold'><Link to='/reviews'>My reviews</Link></li>
                    <li className='font-semibold'><Link to='/orders'>Add service</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Logout</button>
                    </li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link to='/signup'>Signup</Link></li>
                </>

        }
    </>


    return (

        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}

                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl h-">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img alt='' src="https://i.ibb.co/6cMPkDn/chef.png" />
                        </div>
                        <p className='italic font-semibold mt-5'>Dipta's Kitchen</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menuItems}

                </ul>
            </div>
            <div className="navbar-end">
            <div className="avatar">
                        <div className="w-24 rounded">
                            <img alt='' src="https://i.ibb.co/YTcmDdL/slider-1.jpg" />
                        </div>
                    </div>
            </div>
        </div>

    );
};

export default Header;