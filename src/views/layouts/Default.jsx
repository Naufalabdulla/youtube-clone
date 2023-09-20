import React, { useState } from 'react'

import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Default = () => {
  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <nav className='w-full py-1 px-4'>
        <div className='flex w-full items-center'>
          <div className='flex items-center gap-2'>
              <img src="./assets/hamburg-002.svg" alt="youtube" className='hover:bg-slate-600 p-2 cursor-pointer' onClick={() => setSidebar((prev) => !prev)}/>
              <Link to="/" className='flex items-center gap-1'>
                <img src="./assets/youtube_logos.svg" alt="youtube" className='w-fit h-fit' />
                <h1 className='text-xl font-extrabold'>YouTube</h1>
              </Link>
          </div>

          <div className='flex gap-2 items-center'>
            <input className='flex rounded-2xl px-3 py-2' placeholder='search' type="text" name="" id="" />
            <button type="button" className=' bg-gray-800 rounded-full py-2 px-3  hover:bg-gray-700'>m</button>
          </div>

          <div className='rounded-full'>youtube</div>
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