import React from 'react'
import { Content } from '../../components'
import { dataContent } from '../../data/dummy'

const Video = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-2 mt-10'>
            <p>Created Playlist</p>
        </div>
        <div className='content-container'>
            {dataContent.map((item) => (
                <Content
                   key={item.index}
                   title={item.title}
                   uploader={item.uploader}
                   uploaded={item.uploaded}
                   watched={item.watched}
                   vertical={true}
                   size={'sm'}/>
            ))}
        </div>
    </div>
  )
}

export default Video