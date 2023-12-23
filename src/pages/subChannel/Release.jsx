import React from 'react'
import { Content } from '../../components'
import { dataContent } from '../../data/dummy'

const Release = () => {
  return (
    <div className='flex flex-col mt-5'>
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

export default Release