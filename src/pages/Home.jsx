import React, { useState } from 'react'
import SubNavbar from '../components/SubNavbar'
import Content from '../components/Content'

function Home() {
  const [data, setData] = useState([{name: "foo"}, {name: "too"}])
  return(
    <div className='w-full max-w-full mx-8'>
      <SubNavbar/>
      <div className='w-full grid grid-cols-3 gap-4 mt-5'>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        {data.map((s, index) => (
          <Content key={index} name={s}/>
        ))}
      </div>
    </div>
  )
}

export default Home