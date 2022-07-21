import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import data from '../database/data'
import '../styles/support.css'

const Header = ({active}) => {
  const {name,navs} = data;
  const [openDrawer,setOpenDrawer] = useState(false)

  return (
    <div className='shadow-2xl sticky z-10'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <div>
            <Link to={'/'}><h1 className='text-2xl hover:scale-90 transition-all duration-300 font-semibold'>{name}</h1></Link>
          </div>
          {/* desktop nav */}
          <div className='hidden lg:flex'>
            <ul className='flex gap-x-5'>
              {
                navs.map((nav,index) =>{
                  return(
                    <li  className={`text-xl font-medium hover:text-blue-800 hover:scale-90 transition-all duration-300 p-2 ${active === nav.href ? 'text-blue-800 font-extrabold' : ''}`} key={index}> <Link to={nav.href}>{nav.name}</Link> </li>
                  )
                })
              }
            </ul>
          </div>
          {/* drawer */}
          <div className='lg:hidden' onClick={() =>{setOpenDrawer(!openDrawer)}}>
            {openDrawer ? <CloseIcon fontSize='large' className='cursor-pointer text-blue-700 hover:scale-90' /> : <SegmentIcon fontSize='large' className='cursor-pointer text-blue-700 hover:scale-90' />}
          </div>
        </div>
        {/* mobile nav */}
        <div className={`lg:hidden max-w-xs w-full h-screen bg-[rgba(255,255,255,0.4)] backdrop-blur-md shadow-2xl transition-all duration-300 fixed top-0 ${openDrawer ? 'left-0' : '-left-full'}`}>
          <div className='flex flex-col justify-center items-center w-full h-full shadow-2xl'>
            {/* navs */}
            <ul className='gap-y-3'>
              {
                navs.map((nav,index) =>{
                  return(
                    <li  className={`text-xl font-medium hover:text-blue-800 hover:scale-90 transition-all duration-300 p-2 ${active === nav.href ? 'text-blue-800 font-extrabold' : ''}`} key={index}> <Link to={nav.href}>{nav.name}</Link> </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
