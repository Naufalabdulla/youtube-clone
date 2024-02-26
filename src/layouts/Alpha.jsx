import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Navbar, Sidebar } from '../components'

const Alpha = () => {
  const [items, setItems] = useState(true)
  return (
    <div className='h-screen overflow-auto'>
      <Navbar status={items} superb={setItems}/>
      <div className={`${items ? 'hidden' : 'fixed top-15 left-0'}`}>
        <Sidebar status={items}/>
      </div>
      <Outlet />
    </div>
  )
}

export default Alpha