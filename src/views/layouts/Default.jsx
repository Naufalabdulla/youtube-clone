import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Default = () => {  
  const [items, setItems] = useState(true)
  return (
    <>
      <Navbar status={items} superb={setItems}/>

      <div className='flex'>
        <Sidebar status={items}/>
        <Outlet/>
      </div>
      </>
  )
}

export default Default

const Navbar = (sidebar) => {
  return(
      <nav className='w-full py-1 px-4'>
        <div className='flex w-full items-center justify-between py-1'>
          <div className='flex items-center gap-4'>
              <img src="./assets/hamburg-002.svg" alt="youtube" className='hover:bg-slate-600 p-1.5 cursor-pointer' onClick={() => sidebar.superb((prev) => !prev)}/>
              <Link to="/" className='flex items-center gap-1'>
                <img src="./assets/youtube_logos.svg" alt="youtube" className='w-fit h-fit' />
                <h1 className='text-xl font-extrabold'>YouTube</h1>
              </Link>
          </div>

          <div className='flex gap-2 items-center'>
            <input className='flex rounded-full bg-inherit border border-neutral-700 px-3 py-2 w-96' placeholder='search' type="text" name="" id="" />
            <div className='flex relative'>
              <button type="button" className='peer bg-gray-800 rounded-full py-2 px-3  hover:bg-gray-700'>m</button>
              {/* <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-1 absolute top-full text-xs'>Voice</p> */}
            </div>
          </div>

          <div className='flex flex-row-reverse gap-x-2 items-center'>
            <button className='flex items-center gap-2 border border-neutral-600 rounded-full px-3 py-1.5 text-blue-500 font-bold hover:bg-blue-600 hover:bg-opacity-50 hover:border-blue-600 hover:border-opacity-50' type="button">
              <img src="./assets/person.svg" className='overflow-hidden' alt="" />
              Sign In
            </button>

            <div className='flex relative'>
              <img src="./assets/three_dot.svg" alt="" className='cursor-pointer p-2 peer'/>
              <p className='hidden peer-hover:inline-flex bg-gray-500 rounded-md p-2 mt-5 -left-5 absolute top-full text-xs'>Settings</p>
            </div>
          </div>
        </div>
      </nav>
  )
}

const Sidebar = (props) => {
  return(
      <div className='sticky top-0 left-0 flex flex-col bg-sky-900'>

        {props.status ? 
          <div className='w-16'>
            <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-xs'>Home</p>
            </div>

            {/* <div className='py-5 w-full flex justify-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-xs'>home</p>
            </div> */}

            <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="24" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="30" height="18" stroke="white" stroke-width="2"/>
                <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="white" stroke="white"/>
                <line x1="2" y1="4" x2="29" y2="4" stroke="white" stroke-width="2"/>
                <line x1="6" y1="1" x2="25" y2="1" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-xs inline-block'>home</p>
            </div>

            <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
              <p className='text-xs inline-block'>Collection</p>
            </div>
          </div>  

          :
          
          <div className='w-60 px-2.5 py-3'>
            <div className='px-3 py-2 w-full flex items-center cursor-pointer rounded-lg hover:bg-red-900 gap-x-6'>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-normal font-semibold'>Home</p>
            </div>

            {/* <div className='py-5 w-full flex justify-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-normal font-normal'>home</p>
            </div> */}

            <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="24" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="30" height="18" stroke="white" stroke-width="2"/>
                <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="white" stroke="white"/>
                <line x1="2" y1="4" x2="29" y2="4" stroke="white" stroke-width="2"/>
                <line x1="6" y1="1" x2="25" y2="1" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-normal font-normal inline-block'>Subscri</p>
            </div>

            <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>

              <p className='text-normal font-normal inline-block'>Collection</p>
            </div>
          </div>
        }
               
      </div>
  )
}         