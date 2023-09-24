import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Default = () => {
  const [sidebar, setSidebar] = useState(true)
  

  return (
    <>
      <Navbar/>

      <div className='flex'>
        <Sidbar/>
        <Outlet />
      </div>
    </>
  )
}

export default Default

const Navbar = () => {
  return(
      <nav className='w-full py-1 px-4'>
        <div className='flex w-full items-center justify-between py-1'>
          <div className='flex items-center gap-2'>
              <img src="./assets/hamburg-002.svg" alt="youtube" className='hover:bg-slate-600 p-2 cursor-pointer' onClick={() => setSidebar((prev) => !prev)}/>
              <Link to="/" className='flex items-center gap-1'>
                <img src="./assets/youtube_logos.svg" alt="youtube" className='w-fit h-fit' />
                <h1 className='text-xl font-extrabold'>YouTube</h1>
              </Link>
          </div>

          <div className='flex gap-2 items-center'>
            <input className='flex rounded-full bg-inherit border border-neutral-700 px-3 py-2 w-96' placeholder='search' type="text" name="" id="" />
            <div className='flex relative'>
              <button type="button" className='peer bg-gray-800 rounded-full py-2 px-3  hover:bg-gray-700'>m</button>
              {/* <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-1 absolute top-full text-xs'>Voice</p> */}
            </div>
          </div>

          <div className='flex flex-row-reverse gap-x-2 items-center'>
            <button className='flex items-center gap-2 border border-neutral-600 rounded-full px-3 py-1.5 text-blue-500 font-bold hover:bg-blue-600 hover:bg-opacity-50 hover:border-blue-600 hover:border-opacity-50' type="button">
              <img src="./assets/person.svg" className='overflow-hidden' alt="" />
              Sign In
            </button>

            <div className='flex relative'>
              <img src="./assets/three_dot.svg" alt="" className='cursor-pointer p-2 peer'/>
              <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-5 absolute top-full text-xs'>Settings</p>
            </div>
          </div>
        </div>
      </nav>
  )
}

const Sidbar = () => {
  // {sidebar ?<div>sidebar</div> : 
        <div className=' bg-slate-800 w-14 border-r m-1'>
          <div className='py-5 w-full flex justify-center cursor-pointer hover:bg-white focus:fill-white bg-neutral-500'>
            <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="black" stroke-width="2"/>
            </svg>
            {/* <p className='text-xs'>home</p> */}
          </div>

          <div className='py-5 w-full flex justify-center cursor-pointer hover:bg-white focus:fill-white'>
            <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="black" stroke-width="2"/>
            </svg>
            {/* <p className='text-xs'>home</p> */}
          </div>

          <div className='py-5 w-full flex justify-center cursor-pointer hover:bg-white focus:fill-white'>
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="7" width="30" height="18" stroke="black" stroke-width="2"/>
              <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="black" stroke="black"/>
              <line x1="2" y1="4" x2="29" y2="4" stroke="black" stroke-width="2"/>
              <line x1="6" y1="1" x2="25" y2="1" stroke="black" stroke-width="2"/>
            </svg>
            {/* <p className='text-xs'>home</p> */}
          </div>
        </div>
        // }
}