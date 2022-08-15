import React, { useContext } from 'react'
import  { useLocation, Navigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider';


function RequiredAuth() {
    // const location = useLocation();
    const {auth} = useContext(AuthContext)
    return (
        auth.username
        ? <Navigate to = '/DetaiLPage' replace/>
        : <Navigate to = '/loginpage' replace/>

    )

}

export default RequiredAuth