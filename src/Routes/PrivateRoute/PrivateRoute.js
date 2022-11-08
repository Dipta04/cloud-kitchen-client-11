import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button className="btn"><svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg></button>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
       
    
};

export default PrivateRoute;