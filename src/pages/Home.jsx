import React, { useState } from 'react'
import { SubNavbar } from '../components'
import { dataContent } from '../data/dummy'
import YThumbnail from '../components/thumbnails/YThumbnail'

function Home() {
  
  return(
    <div className='default-outlet'>
      <SubNavbar/>
      {/* <div className='w-full grid grid-cols-3 gap-4 mt-5'> */}
      <div className='content-container'>
        {dataContent.map((item) => (
          <YThumbnail key={item.index} data={item} max={420}/>
        ))}
      </div>
    </div>
  )
}

export default Home