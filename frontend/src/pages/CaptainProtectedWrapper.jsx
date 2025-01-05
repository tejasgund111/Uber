import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { captain, setCaptain } = useContext(CaptainDataContext);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/captain-login');
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

export default CaptainProtectedWrapper