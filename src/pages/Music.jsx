import React from 'react'
import { Card } from '../components'

const Music = () => {
  return (
    <div className='p-5 border-b'>
      <div className='flex justify-between'>
        <h1 className='font-extrabold text-xl'>Musics in this year</h1>
        <p className='text-blue-500 py-2 px-4 hover:bg-blue-500 hover:bg-opacity-50 font-bold rounded-full'>see all</p>
      </div>
      <div className='flex gap-3 overflow-hidden'>
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Music