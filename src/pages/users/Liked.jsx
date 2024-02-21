import React from 'react'
import { YThumbnail } from '../../components'

const Liked = () => {
  return (
    <div className='default-outlet grid grid-cols-12 gap-1'>
        <div className='col-span-4 height sticky top-16 pb-5'>
            <div className='rounded-xl bg-third flex flex-col gap-3 p-5 h-full'>
                <img className='rounded-xl' src="../images/quantum.jpg" alt="" />
                <h1 className='text-2xl font-extrabold'>Tonton Nanti</h1>
                <p>AOI</p>
                <p className='text-sm font-light'>8 videos haven't been watched last updated at 2023 08 12</p>
                <div className='flex gap-3'>
                    afda
                </div>
                <div className='flex gap-3'>
                    <button className='rounded-full py-1.5 w-full bg-black'>Putar Semua</button>
                    <button className='rounded-full py-1.5 w-full bg-black'>Shuffle</button>
                </div>
            </div>
        </div>
        <div className='col-span-8 flex flex-col'>
            <div className='mt-5 p-3 flex gap-3'>
              <button className='button-second'>All</button>
              <button className='button-second'>Video</button>
              <button className='button-second'>Shorts</button>
            </div>
            <div className='flex p-3 hover:bg-third rounded-lg group gap-2 items-center'>
                {/* <YThumbnail/> */}
                <img className='h-fit group-hover:visible invisible' src="../assets/three_dot.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Liked