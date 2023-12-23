import React from 'react'
import { NavLink } from 'react-router-dom'

const SubNavbar = () => {
  const url = 'http://localhost:5173/watch'
  return (
    <div className={`${document.URL == url ? '' : 'sticky'} top-16 bg-primary flex py-3 gap-3`}>
      <Box name={'Semua'}/>
      <Box name={'Live'}/>
      <Box name={'Game'}/>
      <Box name={'Music'}/>
      <Box name={'Animation'}/>
      <Box name={'Action Game'}/>
    </div>
  )
}

export default SubNavbar

const Box = (props) => {
    return (
        <NavLink to={props.name} className='rounded-md px-2 py-1 bg-secondary'>
            <p className='text-sm font-bold focus:text-black'>{props.name}</p>
        </NavLink>
    )
}