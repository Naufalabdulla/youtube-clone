import React, { useState } from 'react'
import { links } from "../data/dummy";
import Shrink from './sidebar/shrink';
import Expand from './sidebar/Expand';

// make function doparse same as the route 
const Sidebar = (props) => {

  return(
      <div className='sticky top-16 height col-span-2 bg-primary'>

        {props.status ? 

          <div className='w-16'>
            <Shrink link={''} logo={'home'} name={'home'}/>
            <Shrink link={'shorts'} logo={'home'} name={'shorts'}/>
            <Shrink link={'@hoshimachi'} logo={'home'} name={'subs'}/>
          </div>  

          :

          <div className='w-60 height px-2.5 py-3 overflow-hidden hover:overflow-auto overscroll-contain'>
            <>
              {links.map((item) => (
                <>
                  {item.links.map((link) => (
                    <Expand 
                      link={link.link} 
                      name={link.name} 
                      logo={link.logo}/>
                  ))}

                  <hr className='my-3'/>

                </>
              ))}
            </>
            <p className='text-sm font-thin text-gray-100 px-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi perspiciatis nam nisi? 
              Explicabo aspernatur dolores minus iure voluptatibus qui dolor itaque provident sunt debitis.</p>
              
          </div>
        }
               
      </div>
  )
}    

export default Sidebar
