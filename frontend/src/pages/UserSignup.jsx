import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }


  return (
    <div>
      <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
          <img className='w-16 mb-10 ' src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="img" />

          <form onSubmit={submitHandler}>

            <h3 className='text-lg font-medium mb-2'>What's your Name</h3>

            <div className='flex gap-4 mb-5'>
              <input
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                type="text"
                required
                placeholder='First Name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base'
                type="text"
                required
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              required
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type="password"
              required
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className='bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
            >Create Account</button>

          </form>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600 '>Login here</Link></p>
        </div>

        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span>  and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup