import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({thumbnail, title, uploader, uploaded, watched, vertical, size}) => {
  let sizes = ''
  switch (size) {
    case 'xl':
      sizes ={width: 'w-[360px] ', height: 'h-[180px]'} 
      break;
    case 'lg':
      sizes ={width: 'w-[360px] ', height: 'h-[180px]'}
      break;
  
    default:
      sizes = {width: 'w-[197px]', height: 'h-[120px]'} 
      break;
  }
  return (
    // time to use HOC (high order component)
    <>
    {vertical ? (
      <Link to={`/watch`} className={`${sizes.width}`}>
        <img className={`object-cover rounded-xl ${sizes.width} ${sizes.height}`} src="../images/quantum.jpg" alt="" />
        <h1 className='font-bold text-lg truncate'>{title}</h1>
        <p className='font-medium text-sm'>{uploader}</p>
        <p className='text-sm'>{watched} · {uploaded}</p>
      </Link>
    ) : (
      <Link to={`/watch`} className='flex gap-2 w-full'>
        <img src="../images/quantum.jpg" className={`${sizes.width} ${sizes.height} object-cover rounded-lg`} alt="" />
        <div className='flex flex-col gap-1'>
          <h1 className='font-extrabold line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis excepturi culpa eligendi sequi! Nesciunt?</h1>
          <p className='text-sm '>Lorem, ipsum dolor.</p>
          <p className='text-sm'>477x ditonton </p>
        </div>
      </Link>
    )}
    </>
  )
}

export default Content