import React, { useState } from 'react'
import { links } from "../data/dummy";
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {
  const [first, setFirst] = useState(true)

  const Icons = ({logo, name, link}) => {
    const active = 'p-5 flex flex-col items-center rounded-lg bg-third'
    const deactive = 'p-5 flex flex-col items-center rounded-lg hover:bg-third opacity-80'
    return(
    <NavLink to={`/${link}`} className={({isActive}) => isActive ? active : deactive}>
      <img src={`../assets/${logo}.svg`} alt="" className='h-6 w-6' />
      <p className='text-xs capitalize'>{name}</p>
    </NavLink>
    )
  }
  
  const Icons2 = ({logo, link, name}) => {
    const activeLink = "flex px-3 py-2.5 rounded-lg gap-5 bg-third";
    const deactiveLink = "flex px-3 py-2.5 rounded-lg gap-5 hover:bg-third opacity-80";
    return(
      <NavLink to={`/${link}`} className={({isActive}) => isActive ? activeLink : deactiveLink}>
        <img src={`../assets/${logo}.svg`} alt="" className='h-6 w-6'/>
        <p className='text-center capitalize'>{name}</p>
      </NavLink>
    )
  }

  // a bit problem on the sidebar in the bottom the last element will sink when the sidebear is overflowing

  return(
      <div className='sticky top-16 height col-span-2'>

        {props.status ? 
          <div className='w-16'>
            <Icons link={''} logo={'home'} name={'home'}/>
          </div>  

          :

          <div className='w-60 height px-2.5 py-3 overflow-hidden hover:overflow-auto overscroll-contain'>
            <>
              {links.map((item) => (
                <div>
                  {item.links.map((link) => (
                    <Icons2 
                      link={link.link} 
                      name={link.name} 
                      logo={link.logo}/>
                  ))}
                  {/* if (condition) {
                    if the its the last item then hr element is hidden
                  } */}
                  <hr className='my-3'/>
                </div>
              ))}
            </>
          </div>
        }
               
      </div>
  )
}    

export default Sidebar
