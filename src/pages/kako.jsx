import React from 'react'
import { HThumbnail } from '../components'
import { Outlet } from 'react-router-dom'

const pso = '/'

const kako = () => {
  return (
    <div className='flex'>
      <HThumbnail title={'lorem'} max={420}/>
      <div className='h-[236px] w-[420px] bg-blue-800'>s</div>
      <Outlet />
    </div>
  )
}

export default kako