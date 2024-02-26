import React from 'react'
import { ChPlaylist, ChThumbnail, HThumbnail } from '../components'

const Search = () => {
    const state = true
  return (
    <div className='default-outlet flex gap-2'>
       <div className='w-full'>
         <div className=''>
            <ChThumbnail />
        </div>
        <hr className='my-5 border-third'/>
        <div className=''>
            <HThumbnail />
        </div>
       </div>
        { state && <ChPlaylist/> }
    </div>
  )
}

export default Search
