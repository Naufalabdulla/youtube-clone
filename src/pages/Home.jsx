import React, { useState } from 'react'
import { SubNavbar, Content } from '../components'
import { dataContent } from '../data/dummy'

function Home() {
  
  return(
    <div className='default-outlet'>
      <SubNavbar/>
      {/* <div className='w-full grid grid-cols-3 gap-4 mt-5'> */}
      <div className='content-container'>
        {dataContent.map((item) => (
          <Content 
          key={item.index}
          title={item.title}
          uploader={item.uploader}
          watched={item.watched}
          uploaded={item.uploaded}
          vertical={true}
          size={'xl'}/>
        ))}
        <Content />
      </div>
    </div>
  )
}

export default Home