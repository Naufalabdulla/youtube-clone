import React, { useState } from 'react'
import Nav from '../../components/Nav'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Input } from 'postcss'

const Default = () => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <nav className='w-full py-1 px-4'>
        <div className='flex w-full items-center justify-between py-1'>
          <div className='flex w-fit items-center gap-2'>
              <img src="./assets/hamburg-002.svg" alt="youtube" className='hover:bg-slate-600 p-2 cursor-pointer' onClick={() => setSidebar((prev) => !prev)}/>
              <Link to="/" className='flex items-center gap-1'>
                <img src="./assets/youtube_logos.svg" alt="youtube" className='w-fit h-fit' />
                <h1 className='text-xl font-extrabold'>YouTube</h1>
              </Link>
          </div>

          <div className='flex justify-center gap-2 items-center'>
            <input className='background_search flex w-2/5 rounded-full bg-inherit border border-gray-700 px-3 py-2' placeholder='search' type="text" name="" id="" />
            <button type="button" className=' bg-gray-800 rounded-full py-2 px-3  hover:bg-gray-700'>m</button>
          </div>

          <div className='flex flex-row-reverse'>
            <button className='border rounded-lg w-full' type="button">Sign In</button>
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