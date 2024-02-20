import React, { useState } from 'react'
import { YThumbnail, HThumbnail } from '../components'
import { dataContent } from '../data/dummy'

const Subscription = () => {
  const [grid, setGrid] = useState(true)

  return (
    <div className='default-outlet'>
      <div className='flex justify-between items-center mt-5 p-1'>
        <h1 className='font-bold text-2xl'>Newest</h1>
        <div className='flex items-center gap-3'>
          <h1 className='px-3 py-1.5 rounded-full hover:bg-blue-600 hover:bg-opacity-50 text-blue-500 font-bold cursor-pointer'>Manage</h1>
          <img src='/assets/Grid.svg' className='hover:bg-third p-1 object-center object-none cursor-pointer' onClick={ ()=> setGrid(true) }/>
          <img src='/assets/List.svg' className='hover:bg-third p-1 object-center object-none cursor-pointer' onClick={ () => setGrid(false) }/>
        </div>
      </div>

      {grid ? 
        <div className='content-container'>
          {dataContent.map((item) => (
            <YThumbnail key={item.index} data={item}/>
          ))}
        </div>
      : 
        <div className='content-container-alpha'>
          {dataContent.map((item) => (
            <HThumbnail key={item.index} data={item}/>
          ))}
          sad
        </div>
      }
    </div>
  )
}

export default Subscription