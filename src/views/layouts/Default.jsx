import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

const Default = () => {  
  const [items, setItems] = useState(false)
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar status={items} superb={setItems}/>

      <div className='flex max-h-full overflow-auto'>
        <Sidebar status={items}/>
        <Outlet/>
      </div>
      </div>
  )
}

export default Default



