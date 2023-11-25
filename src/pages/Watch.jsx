import React from 'react'
import { Content, SubNavbar } from '../components'


const Watch = () => {

  const CardContent = () => {
    return(
      <div className='flex max-w-full bg-slate-800 overflow-x-hidden'>
        <img src="./images/quantum.jpg" className='h-[120px] w-[197px] object-cover' alt="" />
        <div className=' block'>
          <h1 className='font-extrabold truncate'>Lorem6</h1>
          <p>Lorem, ipsum dolor.</p>
          <p className='text-xs'>Lorem, ipsum dolor.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex px-6 gap-6'>
      <div>
        <div className='w-[900px] h-[506px] bg-slate-800'>
          film
        </div>
        <div className='bg-slate-700'>
          {/* <div className='h-screen'>div</div>
          <div className='h-screen'>div</div>
          <div className='h-screen'>div</div> */}
        </div>
      </div>
      <div>
        <SubNavbar />
        <CardContent />
      </div>
    </div>
  )
}

export default Watch
