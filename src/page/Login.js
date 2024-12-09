import React, { useState } from 'react'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import loginSignupImage from '../assest/login-animation.gif'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/userSlice';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [data, setData] = useState({

    email: '',
    password: '',

  })
  const navigate = useNavigate()
  const userData = useSelector(state => state)
  // console.log(userData.user);  

  const dispatch = useDispatch()
  console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const { email, password } = data
  //   if (email && password) {
  //     const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (fetchData.ok) {
  //       const dataRes = await fetchData.json();

  //       // Check if dataRes contains expected properties
  //       if (dataRes && dataRes.userData && dataRes.userData.email) {
  //         dispatch(loginRedux(dataRes));

  //         // Check if the user is an admin
  //         const isAdmin = dataRes.userData.email === process.env.REACT_APP_ADMIN_EMAIL;

  //         // Redirect based on admin status
  //         const redirectTo = isAdmin ? '/admin' : '/';

  //         // Navigate to the appropriate route
  //         navigate(redirectTo);
  //       } else {
  //         toast.error("Invalid response from server");
  //       }
  //     } else {
  //       toast.error("Failed to fetch data from server");
  //     }
  //     console.log(userData);

  //   } else {
  //     alert("please eneter a required feild")
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const dataRes = await fetchData.json();


      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error(dataRes.message);
      }
    } else {
      toast.error('Please enter both email and password');
    }
  };


  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4'>
      {/* <h1 className='text-center text-2xl font-bold'>signup</h1> */}
      <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
        <img src={loginSignupImage} className='w-full' />
      </div>

      <from className='w-full py-3 flex flex-col' >


        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email}
          onChange={handleOnChange}></input>

        <label htmlFor='password'>Password:</label>
        <div className='flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200  focus-within:outlet focus-within:outline-blue-300'>
          <input type={showPassword ? 'text' : 'password'} id='password' name='password' className=' w-full bg-slate-200 border-none outline-none' value={data.password}
            onChange={handleOnChange}></input>
          <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
        </div>
        <p>Forgot your password? <Link to="/login/forgot-password" className='text-red-500 underline'>Reset it here</Link></p>



        <button onClick={handleSubmit} className='w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
      </from>
      <p className='text-sm'>Don't have account? <Link to={'/signup'} className='text-red-500 underline'>Signup</Link></p>
    </div>
  )
}

export default Login;