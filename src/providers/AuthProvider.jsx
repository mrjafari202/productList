import React from 'react'
import { getCookie } from '../utils/cookie'
import { Navigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const token = getCookie('token');
    if (!token) return <Navigate to='/login' />;

    return children
}

export default AuthProvider