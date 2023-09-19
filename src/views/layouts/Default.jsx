import React, { useState } from 'react'
import Nav from '../../components/Nav'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Default = () => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <>
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

      <div className='flex'>
        {/* {sidebar ?<div>sidebar</div> : <div>s</div>} */}
        <Outlet />
      </div>
    </>
  )
}

export default Default