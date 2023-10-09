import React from 'react'
import SubNavbar from '../components/SubNavbar'
import Content from '../components/Content'

function Home() {
  return (
    <div className='w-full py-3 px-7'>
      <SubNavbar/>
      <Content />
    </div>
  )
}

export default Home