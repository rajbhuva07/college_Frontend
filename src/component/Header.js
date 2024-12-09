import React, { useState } from 'react'
import logo from '../assest/logo.png'
import { Link } from "react-router-dom"
import { PiUserCirclePlusBold } from "react-icons/pi";
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import toast from 'react-hot-toast';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()
  console.log(userData.email);
  const handleShowMenu = () => {
    setShowMenu(preve => !preve)
  }
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("logout succesfully")
  }
  const cartItemNumber = useSelector((state) => state.products.cartItem)
  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      {/* desktop */}
      <div className='flex items-center h-full justify-between'>
        <Link to={''}>
          <div className='h-12'>
            <img src={logo} className='h-full' width={"130px"} />
          </div>
        </Link>

        <div className='flex items-center gap-4 md:gap-7 '>
          <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
            <Link to={''}>Home</Link>
            <Link to={'menu/65c77d59683969fb8c0f6de4'}>Menu</Link>
            <Link to={'about'}>About</Link>
            <Link to={'contact'}>Contact</Link>
          </nav>
          <div className='text-2xl text-slat-600 relative'>
            <Link to={'cart'}>  <BsCartFill />
              <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 text-sm text-center rounded-full m-0 p-0'>{cartItemNumber.length}</div>
            </Link>
          </div>
          <div className=' text-slat-600 ' onClick={handleShowMenu}>

            <div className='text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md'>

              {userData.image ? <img src={userData.image} /> : <PiUserCirclePlusBold />}
            </div>

            {
              showMenu &&
              <div className='absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w[120px] text-centre'>
                {
                  userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={'newproduct'} className='whitespace-nowrap cursor-pointer px-2'>New Product</Link>
                }

                {
                  userData.image ? <p className='cursor-pointer text-white px-2 bg-red-500' onClick={handleLogout}>logout ({userData.firstname})</p> : <Link to={'login'} className='whitespace-nowrap px-2 cursor-pointer'>Login</Link>
                }
                <nav className='text-base md:text-lg flex flex-col md:hidden'>
                  <Link className='px-2 py-1' to={''}>Home</Link>
                  <Link className='px-2 py-1' to={'menu/65c77d59683969fb8c0f6de4'}>Menu</Link>
                  <Link className='px-2 py-1' to={'about'}>About</Link>
                  <Link className='px-2 py-1' to={'contact'}>Contact</Link>
                </nav>
              </div>
            }

          </div>
        </div>

      </div>


      {/* mobile */}
    </header >




  )
}

export default Header