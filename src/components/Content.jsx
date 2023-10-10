import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    // problem on the scaling 
    <Link to='/watch'>
    <div className='w-full max-h-80' onClick={Link}>
        <div className=' w-full'>
            {/* the rounded style cannot be applyed*/}
          <img className='object-contain' src="/images/quantum.jpg" alt="" />
        </div>
        <h1 className='font-extrabold truncate'>VCR ArK Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptate?</h1>
        <p className='font-medium'>Channel</p>
        <p>uploaded time</p>
    </div>
    </Link>
  )
}

export default Content