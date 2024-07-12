import React from 'react';
import { AuthContext } from '../Context/Auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user } = React.useContext(AuthContext);
    console.log(user);
   
    if (!user) {
        return <Navigate to="/signup" replace={true} />;
    }
    return children
};

export default PrivateRoute;
