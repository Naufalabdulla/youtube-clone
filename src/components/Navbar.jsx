import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return(
        <nav className='col-span-12 py-1 px-4 sticky top-0 bg-primary' id='navs'>
          
              {/* Logo */}
          <div className='flex w-full items-center justify-between py-1'>
            <div className='flex items-center gap-4'>
                <img src="../assets/hamburg-002.svg" alt="youtube" className='hover:bg-slate-600 p-1.5 cursor-pointer' onClick={() => props.superb((prev) => !prev)}/>
                <Link to="/" className='flex items-center gap-1'>
                  <img src="../assets/youtube_logos.svg" alt="youtube" className='w-fit h-fit' />
                  <h1 className='text-xl font-extrabold'>YouTube</h1>
                </Link>
            </div>

              {/* Search */}
            <div className='flex gap-2 items-center'>
              <div className='flex'>
                <div className='flex px-3 gap-2 items-center border border-neutral-700 rounded-l-full focus-within:border-blue-700 flex-row-reverse'>
                  <input className='outline-none bg-transparent w-96 peer' type="text" placeholder='search' />
                  <svg className=' fill-white peer-focus:flex hidden' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </div>

                <button className='py-2 px-3 bg-third border border-neutral-700 rounded-r-full border-l-0'>
                  <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </button>
              </div>

              {/* Mic */}
              <div className='flex relative'> 
                <button type="button" className='peer bg-gray-800 rounded-full py-2 px-3  hover:bg-gray-700'>m</button>
                {/* <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-1 absolute top-full text-xs'>Voice</p> */}
              </div>
            </div>

              {/* Account */}
            <div className='flex flex-row-reverse gap-x-2 items-center'>
              <button className='flex items-center gap-2 border border-neutral-600 rounded-full px-3 py-1.5 text-blue-500 font-bold hover:bg-blue-600 hover:bg-opacity-50 hover:border-blue-600 hover:border-opacity-50' type="button">
                <img src="../assets/person.svg" className='overflow-hidden' alt="" />
                Sign In
              </button>
  
              <div className='flex relative'>
                <img src="../assets/three_dot.svg" alt="" className='cursor-pointer p-2 peer'/>
                <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-5 absolute top-full text-xs'>Settings</p>
              </div>
            </div>
            
          </div>
        </nav>
    )
  }

export default Navbar