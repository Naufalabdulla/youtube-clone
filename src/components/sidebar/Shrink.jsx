import React from "react"
import { NavLink } from "react-router-dom"

const active = 'p-5 flex flex-col items-center rounded-lg bg-third'
const deactive = 'p-5 flex flex-col items-center rounded-lg hover:bg-third opacity-80'

const Shrink = ({logo, name, link}) => {
    return(
      <NavLink 
        to={`/${link}`} 
        className={({isActive}) => 
          isActive ? active : deactive}>
            <img src={`../assets/${logo}.svg`} alt="" className='h-6 w-6' />
            <p className='text-xs capitalize'>{name}</p>
      </NavLink>
    )
  }

  export default Shrink

  function yasei() {}