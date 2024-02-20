import React from 'react'
import { YThumbnail } from '../../components'
import { dataContent } from '../../data/dummy'

const Video = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-2 mt-10'>
            <p>Created Playlist</p>
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