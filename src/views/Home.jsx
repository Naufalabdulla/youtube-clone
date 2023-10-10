import React from 'react'
import SubNavbar from '../components/SubNavbar'
import Content from '../components/Content'

function Home() {
  return (
    <div className='w-full max-w-full py-3 px-7'>
      <SubNavbar/>
      <div className='w-full grid grid-cols-3 gap-4'>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      </div>
    </div>
  )
}

export default Home