import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

      setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img className='w-16 mb-10 ' src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="img" />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            type="email"
            required
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            type="password"
            required
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
          >Login</button>

        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600 '>Create new Account</Link></p>
      </div>

      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold  rounded px-4 py-2 w-full text-lg placeholder:text-sm'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin