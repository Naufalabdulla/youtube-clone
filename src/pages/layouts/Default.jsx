import React, { useState } from 'react'
import { Outlet } from 'react-router'
import {Sidebar, Navbar} from '../../components'

const Default = () => {  
  const [items, setItems] = useState(false)
  return (
    <div className='h-screen  max-w-screen overflow-auto'>
      <Navbar status={items} superb={setItems}/>

      <div className='flex max-h-full overflow-auto'>
        <Sidebar status={items}/>
        <Outlet/>
      </div>
      </div>
  )
}

export default Default



