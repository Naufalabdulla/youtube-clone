import React from 'react'
import Content from '../components/Content'
import { dataContent } from '../data/dummy'

const Histori = () => {
  return (
    <div className='default-outlet mt-5'>
      <h1 className='text-4xl font-bold py-5'>History</h1>
      <div className="grid grid-cols-12 gap-5 static">
        <div className='col-span-7 content-container-alpha'>
          <h4 className='text-xl font-bold'>Today</h4>
          {dataContent.map((item) => (
            <Content 
              key={item.index}
              title={item.title}
              uploader={item.uploader}
              uploaded={item.uploaded}
              vertical={false}
              size={'xl'}/>
          ))}
        </div>
        <div className="col-span-4 mx-10 fixed top-36 right-56">
          <input type="text" placeholder='search history' className='bg-transparent border-b outline-none p-2 w-full'/>
          <div className='p-3 font-bold'>delete all history</div>
          <div className='p-3 font-bold'>paused history</div>
          <div className='p-3 font-bold'>manage history</div>
        </div>
      </div>
    </div>
  )
}

export default Histori