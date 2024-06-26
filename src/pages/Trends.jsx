import React from 'react'
import { YThumbnail } from '../components'

const Trends = () => {
  return (
    <div className='border-b flex flex-col gap-5 py-5'>
      <h1 className='text-xl font-extrabold'>Trends</h1>
      <div className='flex gap-5 overflow-hidden'>
        <YThumbnail
          vertical={true}
          size={'sm'}/>
      </div>
    </div>
  )
}

export default Trends