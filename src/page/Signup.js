import React, { useState } from 'react';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import loginSignupImage from '../assest/login-animation.gif';
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from '../utility/imageToBase64';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        image: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUploadProfileImage = async (e) => {
        const imageData = await ImagetoBase64(e.target.files[0]);
        setData((prevData) => ({
            ...prevData,
            image: imageData
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password, confirmpassword } = data;
        if (firstname && lastname && email && password && confirmpassword) {
            if (password === confirmpassword) {
                try {
                    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    const responseData = await response.json();
                    toast(responseData.message);
                    if (responseData.alert) {
                        navigate('/login');
                    }
                } catch (error) {
                    console.error('Signup error:', error);
                    toast.error('Signup failed. Please try again.');
                }
            } else {
                toast.error('Password and confirm password do not match');
            }
        } else {
            toast.error('Please enter all required fields');
        }
    };

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    return (
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer'>
                <img src={data.image ? data.image : loginSignupImage} className='w-full h-full' />
                <label htmlFor='profileImage'>
                    <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-20 w-full text-center'>
                        <p className='text-sm p-1 text-white'>Upload</p>
                    </div>
                    <input type='file' id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage} />
                </label>
            </div>

            <form className='w-full py-3 flex flex-col' >
                <label htmlFor='firstName'>First Name:</label>
                <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
                    value={data.firstname}
                    onChange={handleOnChange}
                />

                <label htmlFor='lastname'>Last Name:</label>
                <input type='text' id='lastname' name='lastname' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.lastname}
                    onChange={handleOnChange} />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email}
                    onChange={handleOnChange} />

                <label htmlFor='password'>Password:</label>
                <div className='flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200  focus-within:outlet focus-within:outline-blue-300'>
                    <input type={showPassword ? 'text' : 'password'} id='password' name='password' className=' w-full bg-slate-200 border-none outline-none' value={data.password}
                        onChange={handleOnChange} />
                    <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
                </div>

                <label htmlFor='confirmpassword'>confirm Password:</label>
                <div className='flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200  focus-within:outlet focus-within:outline-blue-300'>
                    <input type={showConfirmPassword ? 'text' : 'password'} id='confirmpassword' name='confirmpassword' className=' w-full bg-slate-200 border-none outline-none' value={data.confirmpassword}
                        onChange={handleOnChange} />
                    <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
                </div>

                <button onClick={handleSubmit} className='w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
            </form>
            <p className='text-sm'>Already have an account? <Link to={'/login'} className='text-red-500 underline'>Login</Link></p>
        </div >
    );
};

export default Signup;

// import React, { useState } from 'react'
// import { BiSolidShow } from "react-icons/bi";
// import { BiSolidHide } from "react-icons/bi";
// import loginSignupImage from '../assest/login-animation.gif'
// import { Link, useNavigate } from "react-router-dom"
// import { ImagetoBase64 } from '../utility/imageToBase64';
// import { toast } from 'react-hot-toast';

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const navigate = useNavigate()
//   const [data, setData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     confirmpassword: '',
//     image: ''
//   })
//   console.log(data);
//   const handleOnChange = (e) => {
//     const { name, value } = e.target
//     setData((preve) => {
//       return {
//         ...preve,
//         [name]: value
//       }
//     })
//   }
//   const handleUploadProfileImage = async (e) => {
//     const data = await ImagetoBase64(e.target.files[0])
//     console.log(data);
//     setData((preve) => {
//       return {
//         ...preve,
//         image: data
//       }
//     })
//   }
//   console.log(process.env.REACT_APP_SERVER_DOMAIN);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, email, password, confirmPassword } = data;
//     if (firstName && email && password && confirmPassword) {
//       if (password === confirmPassword) {

//         const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
//           method: "POST",
//           headers: {
//             "content-type": "application/json"
//           },
//           body: JSON.stringify(data)
//         })

//         const dataRes = await fetchData.json()


//         // alert(dataRes.message);
//         toast(dataRes.message)
//         if (dataRes.alert) {
//           navigate("/login");
//         }

//       } else {
//         alert("password and confirm password not equal");
//       }
//     } else {
//       alert("Please Enter required fields");
//     }
//   };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const { firstname, lastname, email, password, confirmpassword } = data;

//   //   try {
//   //     // Validate input fields
//   //     if (!(firstname && lastname && email && password && confirmpassword)) {
//   //       throw new Error('Please enter all required fields');
//   //     }

//   //     // Validate password and confirm password
//   //     if (password !== confirmpassword) {
//   //       throw new Error('Password and confirm password do not match');
//   //     }

//   //     // Send signup request to the server
//   //     const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     // Handle response
//   //     const dataRes = await fetchData.json();

//   //     if (fetchData.ok) {
//   //       // Successful signup, navigate to login
//   //       toast.success(dataRes.message);
//   //       navigate('/login');
//   //     } else {
//   //       // Handle signup failure, show error message
//   //       toast.error(dataRes.message);
//   //     }
//   //   } catch (error) {
//   //     // Handle any other errors
//   //     toast.error(error.message);
//   //   }
//   // };
//   const handleShowPassword = () => {
//     setShowPassword(prev => !prev)
//   }
//   const handleShowConfirmPassword = () => {
//     setShowConfirmPassword(prev => !prev)
//   }
//   return (
//     <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4'>
//       {/* <h1 className='text-center text-2xl font-bold'>signup</h1> */}
//       <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer'>
//         <img src={data.image ? data.image : loginSignupImage} className='w-full h-full' />

//         <label htmlFor='profileImage'>
//           <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-20 w-full text-center'>
//             <p className='text-sm p-1 text-white'>Upload</p>
//           </div>
//           <input type='file' id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage} />
//         </label>
//       </div>

//       <form className='w-full py-3 flex flex-col' >
//         <label htmlFor='firstName'>FirstName</label>
//         <input
//           type='text'
//           id='firstname'
//           name='firstname'
//           className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
//           value={data.firstname}
//           onChange={handleOnChange}
//         >

//         </input>

//         <label htmlFor='lastname'>Lastname</label>
//         <input type='text' id='lastname' name='lastname' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.lastname}
//           onChange={handleOnChange}></input>

//         <label htmlFor='email'>Emai:</label>
//         <input type='email' id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email}
//           onChange={handleOnChange}></input>

//         <label htmlFor='password'>Password:</label>
//         <div className='flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200  focus-within:outlet focus-within:outline-blue-300'>
//           <input type={showPassword ? 'text' : 'password'} id='password' name='password' className=' w-full bg-slate-200 border-none outline-none' value={data.password}
//             onChange={handleOnChange}></input>
//           <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
//         </div>

//         <label htmlFor='confirmpassword'>confirm Password:</label>
//         <div className='flex mt-1 mb-2 px-2 py-1 rounded bg-slate-200  focus-within:outlet focus-within:outline-blue-300'>
//           <input type={showConfirmPassword ? 'text' : 'password'} id='confirmpassword' name='confirmpassword' className=' w-full bg-slate-200 border-none outline-none' value={data.confirmpassword}
//             onChange={handleOnChange}></input>
//           <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
//         </div>

//         <button onClick={handleSubmit} className='w-full max-w-[150px] m-auto bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
//       </form>
//       <p className='text-sm'>Already have account ? <Link to={'/login'} className='text-red-500 underline'>Login</Link></p>
//     </div >
//   )
// }

// export default Signup