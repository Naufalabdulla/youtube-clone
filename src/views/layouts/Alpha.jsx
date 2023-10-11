import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar'

const Alpha = () => {
  return (
    <div className='max-h-full overflow-auto'>
        {/* <Sidebar status={items}/> */}
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default Alpha