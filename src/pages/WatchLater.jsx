import React from 'react'
import { Content } from '../components'

const WatchLater = () => {
  return (
    <div className='default-outlet grid grid-cols-12 gap-1'>
        <div className='col-span-4'>
            <div className='rounded-xl bg-third flex flex-col gap-3 sticky top-16 p-5 h-5/6'>
                <img className='rounded-xl' src="../images/quantum.jpg" alt="" />
                <h1 className='text-2xl font-extrabold'>Tonton Nanti</h1>
                <p>AOI</p>
                <p className='text-sm font-light'>8 videos haven't been watched last updated at 2023 08 12</p>
                <div className='flex gap-3'>
                    {/*  */}
                </div>
                <div className='flex gap-3'>
                    <button className='rounded-full py-1.5 w-full bg-black'>Putar Semua</button>
                    <button className='rounded-full py-1.5 w-full bg-black'>Shuffle</button>
                </div>
            </div>
        </div>
        <div className='col-span-8 flex flex-col'>
            <div className='mt-5 p-3'>Urutkan</div>
            <div className='flex p-3 hover:bg-third rounded-lg group gap-2 items-center'>
                <Content />
                <img className='h-fit group-hover:visible invisible' src="../assets/three_dot.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WatchLater