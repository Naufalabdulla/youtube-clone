import React, { useState } from 'react'
import { Content } from '../components'
import { channelSublinks } from '../data/dummy'
import { Link, Outlet, NavLink } from 'react-router-dom'

const Beta = () => {
  const active = `py-3 px-1 border-b-2 capitalize`
  const notactive = 'py-3 px-1 hover:border-b-2 capitalize'

  return (
    <div className='col-span-10'>
      <div className='flex justify-between items-center mx-8'>
        <div className='flex items-center gap-5'>
          <img className='w-24 h-24 object-cover object-center rounded-full' src="../images/quantum.jpg" alt="" />
          <h1 className='text-4xl font-bold'>Suisei Channel</h1>
        </div>

        <button className='button-s'>Subscribe</button>
      </div>


      <div className='border-b flex gap-3 px-8 items-center'>
        {channelSublinks.map((item) => (
          <NavLink to={`/channel/${item.link}`} className={({isActive}) => isActive ? active : notactive }>{item.name}</NavLink>
        ))}
      </div>
      
      <div className='mx-8'>
        <Outlet />
      </div>
    </div>
  )
}

export default Beta