import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpinner from '../Components/SmallSpinner';
import { AuthContext } from '../Contexts/ContextProvider';


const PrivateRoute = ({ children }) => {
    const { user, loadingState } = useContext(AuthContext);
    const location = useLocation();
    if (loadingState) {
        return (
            <div className="text-center" >
                <SmallSpinner></SmallSpinner>
            </div >)
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;