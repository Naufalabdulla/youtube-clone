import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return(
        <nav className='col-span-12 py-1 px-4 sticky top-0 bg-primary'>
          
              {/* Logo */}
          <div className='flex w-full items-center justify-between py-1'>
            <div className='flex items-center gap-4'>
                <img src="../assets/hamburg-002.svg" alt="youtube" className='hover:bg-slate-600 p-1.5 cursor-pointer' onClick={() => props.superb((prev) => !prev)}/>
                <Link to="/" className='flex items-center gap-1'>
                  <img src="../assets/youtube_logos.svg" alt="youtube" className='w-fit h-fit' />
                  <h1 className='text-xl font-extrabold'>YouTube</h1>
                </Link>
            </div>

              {/* Search */}
            <div className='flex gap-2 items-center'>
              <input className='flex rounded-full bg-transparent border border-neutral-700 px-3 py-2 w-96 focus:outline-blue-600' placeholder='search' type="text" name="" id="" />
              <div className='flex relative'>
                <button type="button" className='peer bg-gray-800 rounded-full py-2 px-3  hover:bg-gray-700'>m</button>
                {/* <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-1 absolute top-full text-xs'>Voice</p> */}
              </div>
            </div>

              {/* Account */}
            <div className='flex flex-row-reverse gap-x-2 items-center'>
              <button className='flex items-center gap-2 border border-neutral-600 rounded-full px-3 py-1.5 text-blue-500 font-bold hover:bg-blue-600 hover:bg-opacity-50 hover:border-blue-600 hover:border-opacity-50' type="button">
                <img src="../assets/person.svg" className='overflow-hidden' alt="" />
                Sign In
              </button>
  
              <div className='flex relative'>
                <img src="../assets/three_dot.svg" alt="" className='cursor-pointer p-2 peer'/>
                <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-5 absolute top-full text-xs'>Settings</p>
              </div>
            </div>
          </div>
        </nav>
    )
  }

export default Navbar