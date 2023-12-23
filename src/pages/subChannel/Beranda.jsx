import React from 'react'
import { dataContent } from '../../data/dummy'
import { Content } from '../../components'

const Beranda = () => {
  return (
    <div className='border-b flex flex-col py-5 gap-5'>
      <h1 className='text-2xl font-bold'>オリジナルソング</h1>
      <div className='flex gap-x-5 overflow-hidden'>
        {dataContent.map((item) => (
          <Content 
            key={item.index}
            title={item.title}
            uploader={item.uploader}
            watched={item.watched}
            uploaded={item.uploaded}
            vertical={true}
            size={'sm'}/>
        ))}
      </div>
    </div> 
  )
}

export default Beranda