import React from 'react'
import { Outlet } from 'react-router-dom'

const Specials = () => {
  return (
    <div className='col-span-10'>
        <div className='flex flex-col'>
            <div className='bg-hero h-96'>
                <div className='bg-gradient-to-r from-black h-full flex flex-col justify-center gap-5 p-5'>
                <p className='font-light'>sport text · 19 M X watched · 2 days ago</p>
                <h1 className='text-xl font-extrabold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                <div className='flex'></div>
                </div>
            </div>
            <div className='bg-third flex justify-between items-center p-5'>
                <div className='flex items-center gap-5'>
                    <img className='rounded-full w-24 h-24 object-cover object-center' src="../images/quantum.jpg" alt="" />
                    <div className=''>
                        <h1 className='text-xl font-bold'>olahraga</h1>
                        <p className='text-sm font-light'>78 M Subscriber</p>
                    </div>
                </div>
                <button className='button-s text-primary bg-white'>Subscribe</button>
            </div>
        </div>
        
        <div className='mx-8'>
        <Outlet />
        </div>
    </div>
  )
}

export default Specials