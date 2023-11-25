import React from 'react'
import { Outlet } from 'react-router'
import { Navbar, Sidebar } from '../../components'

const Alpha = () => {
  return (
    <div className='h-screen overflow-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Alpha