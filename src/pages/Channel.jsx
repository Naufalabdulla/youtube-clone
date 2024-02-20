import React, { useState } from 'react'
import { YThumbnail } from '../components'
import { channelSublinks } from '../data/dummy'
import { Link, Outlet, NavLink } from 'react-router-dom'

const Channel = () => {
  const active = `py-3 px-1 border-b-2 capitalize`
  const notactive = 'py-3 px-1 mb-0.5 hover:border-b-2 hover:mb-0 capitalize'

  const ririka = () =>{
    document.getElementById('search').focus()
  }
  return (
    <div className='default-outlet'>
      <div className='grid grid-rows-6'>
        <img className='w-full h-48 object-cover object-center rounded-xl row-span-3' src="https://yt3.googleusercontent.com/_FhQJOY3t5UVdPZp087Wf6qvlr9D9zorMYop3FuaujPAdGfGjwwivk11VgzM7P6_HbdhkXMtiSs=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="hero-banner"/>

        <div className='row-span-3 flex items-center gap-5'>
          <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRqqO4mR0IQdyw2q85eSpm38k0JTuXpLoZCHkT94g=s176-c-k-c0x00ffffff-no-rj" className='rounded-full' alt="" />
          <div className='flex flex-col gap-2 h-full p-2'>
            <h1 className='text-4xl font-bold'>Suisei Channel</h1>
            <p className='text-sm text-gray-400'>@HoshimachiSuisei · 2,04 M subscriber · 730 video</p>
            <p className='text-sm text-gray-400'>バーチャルアイドルの星街すいせいです！☄☄</p>
            <div className='flex'>
              <button className='button-s'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className='border-b flex gap-3 px-5 items-center'>
        {channelSublinks.map((item) => (
          <NavLink to={`/hosimachi/${item.link}`} className={({isActive}) => isActive ? active : notactive }>{item.name}</NavLink>
        ))}
        <input id='search' type="text" className={`bg-transparent outline-none border-b p-2 focus:border`} />
        <button onClick={() => ririka()}>focus</button>
      </div>

      <Outlet />
    </div>
  )
}

export default Channel