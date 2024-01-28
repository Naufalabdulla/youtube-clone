import React, { useState } from 'react'
import { Outlet } from 'react-router'
import {Sidebar, Navbar} from '../components'

const Default = () => {  
  const [items, setItems] = useState(false)
  return (
    <div className='h-screen w-screen grid grid-cols-12 overflow-auto'>
      <Navbar status={items} superb={setItems}/>
      <Sidebar status={items}/>
      <Outlet/>
      </div>
  )
}

export default Default



