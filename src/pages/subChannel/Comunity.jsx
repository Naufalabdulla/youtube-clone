import React from 'react'
import { dataComunity } from '../../data/dummy'

const Comunity = () => {
  return (
    <div className='flex flex-col gap-5'>
        {dataComunity.map((item) => (
            <div className='w-4/6 border rounded-lg p-4 mt-10 flex gap-3 group'>
            <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRqqO4mR0IQdyw2q85eSpm38k0JTuXpLoZCHkT94g=s176-c-k-c0x00ffffff-no-rj" className='rounded-full h-10' alt="" />

            <div className='flex flex-col gap-2'>
                <p className='text-sm font-bold capitalize'>{item.name}<span className='text-sm font-normal ms-3'>{item.uploaded}</span></p>
                <p className='line-clamp-5'>{item.description}</p>
                <img className='rounded-lg' src={item.image} alt="" />
                <div className='flex gap-2'>
                    <button className='flex'>
                        <img src="" alt="" />
                        <p className='text-sm'>like</p>
                    </button>
                    <button className='flex'>
                        <img src="" alt="" />
                        <p className='text-sm'>dislike</p>
                    </button>
                    <button className='flex'>
                        <img src="" alt="" />
                        <p className='text-sm'>comment</p>
                    </button>
                </div>
            </div>

            <img src="../assets/three_dot.svg" alt="" className='h-fit invisible group-hover:visible'/>
            </div>
        ))}
    </div>
  )
}

export default Comunity