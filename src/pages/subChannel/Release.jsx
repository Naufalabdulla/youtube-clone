import React from 'react'
import { YThumbnail } from '../../components'
import { dataContent } from '../../data/dummy'

const Release = () => {
  return (
    <div className='flex flex-col mt-5'>
        <div className='content-container'>
            {dataContent.map((item) => (
                <YThumbnail key={item.index}/>
            ))}
        </div>
    </div>
  )
}

export default Release