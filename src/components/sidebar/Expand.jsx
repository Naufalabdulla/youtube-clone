import React from "react";
import { NavLink } from "react-router-dom";

const activeLink = "flex px-3 py-2.5 rounded-lg gap-5 bg-third";
const deactiveLink = "flex px-3 py-2.5 rounded-lg gap-5 hover:bg-third opacity-80";

const Expand = ({logo, link, name}) => {
    return(
      <NavLink to={`/${link}`} className={({isActive}) => isActive ? activeLink : deactiveLink}>
        <img src={`../assets/${logo}.svg`} alt="" className='h-6 w-6'/>
        <p className='text-center capitalize'>{name}</p>
      </NavLink>
    )
  }

export default Expand