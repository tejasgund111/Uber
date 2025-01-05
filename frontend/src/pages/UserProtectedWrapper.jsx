import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data.captain);
                setIsLoading(false);
            }
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login');
        })

    }, [token]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
                <div className="spinner"></div>
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper