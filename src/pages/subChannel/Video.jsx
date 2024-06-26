import React from 'react'
import { YThumbnail } from '../../components'
import { dataContent } from '../../data/dummy'

const Video = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-2 mt-10'>
            <button className='bg-white font-bold text-black rounded-lg py-1.5 px-3'>Latest</button>
            <button className='button-second'>Popular</button>
            <button className='button-second'>Longest</button>
        </div>
        <div className='content-container'>
            {dataContent.map((item) => (
                <YThumbnail key={item.index}/>
            ))}
        </div>
    </div>
  )
}

export default Video