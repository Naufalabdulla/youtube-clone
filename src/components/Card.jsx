import React from 'react'

const Card = () => {
  return (
    <div className='flex gap-2 w-80'>
        <img className='w-32 h-32 object-cover rounded-lg' src="../images/quantum.jpg" alt="" />
        <div className='flex flex-col gap-2 w-full'>
            <h1 className='text-xl text-white font-extrabold'>Dance Floor</h1>
            <p className='text-sm font-light line-clamp-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat animi quod eaque ducimus et aliquid rerum aut ex magnam!</p>
            <p className='text-sm font-light justify-self-start'>100 Songs</p>
        </div>
    </div>
  )
}

export default Card