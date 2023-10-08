import React from 'react'

const Sidebar = (props) => {
  return(
      <div className='sticky top-0 flex flex-col bg-sky-900s'>

        {props.status ? 
          <div className='w-16'>
            {/* <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-xs'>Home</p>
            </div>

            <div className='py-5 w-full flex justify-center cursor-pointer rounded-lg hover:bg-red-900'>
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
              <p className='text-xs'>home</p>
            </div>

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
            </div> */}
            <Icons name={'Home'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons>
            <Icons name={'Short'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons>
            <Icons name={'Subscr'}>
            <svg width="24" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="7" width="30" height="18" stroke="white" stroke-width="2"/>
            <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="white" stroke="white"/>
            <line x1="2" y1="4" x2="29" y2="4" stroke="white" stroke-width="2"/>
            <line x1="6" y1="1" x2="25" y2="1" stroke="white" stroke-width="2"/>
            </svg>
            </Icons>
            <Icons name={'Collect'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons>
          </div>  

          :

          <div className='w-60 px-2.5 py-3 overflow-hidden hover:overflow-auto overscroll-contain'>
            <>
            <Icons2 name={'Home'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" >
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            <Icons2 name={'Shorts'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" >
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            <Icons2 name={'Subscription'}>
              <svg width="24" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="30" height="18" stroke="white" stroke-width="2"/>
                <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="white" stroke="white"/>
                <line x1="2" y1="4" x2="29" y2="4" stroke="white" stroke-width="2"/>
                <line x1="6" y1="1" x2="25" y2="1" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Home'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" >
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            <Icons2 name={'Shorts'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" >
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            <Icons2 name={'Subscription'}>
              <svg width="24" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="30" height="18" stroke="white" stroke-width="2"/>
                <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="white" stroke="white"/>
                <line x1="2" y1="4" x2="29" y2="4" stroke="white" stroke-width="2"/>
                <line x1="6" y1="1" x2="25" y2="1" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Home'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" >
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            <Icons2 name={'Shorts'}>
              <svg width="20" height="25" viewBox="0 0 28 33" fill="none" >
              <path d="M9.5 20V32H1V13L14 2L27 13V32H18.5V20H9.5Z" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            <Icons2 name={'Subscription'}>
              <svg width="24" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="7" width="30" height="18" stroke="white" stroke-width="2"/>
                <path d="M12.75 11.7369L21 16.5L12.75 21.2631V11.7369Z" fill="white" stroke="white"/>
                <line x1="2" y1="4" x2="29" y2="4" stroke="white" stroke-width="2"/>
                <line x1="6" y1="1" x2="25" y2="1" stroke="white" stroke-width="2"/>
              </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
            <hr className='my-4'/>
            <>
            <Icons2 name={'Collection'}>
              <svg width="21" height="21" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="23" height="23" fill="none" stroke="white" stroke-width="2"/>
                <mask id="path-2-inside-1_19_3" fill="white">
                  <path d="M0 4H25V29H0V4Z"/>
                </mask>
                <path d="M0 29H-2V31H0V29ZM25 27H0V31H25V27ZM2 29V4H-2V29H2Z" fill="white" mask="url(#path-2-inside-1_19_3)"/>
                <path d="M22 12L13 17.1962V6.80385L22 12Z" fill="white"/>
              </svg>
            </Icons2>
            <Icons2 name={'Your Videos'}>
            <svg width="19" height="19" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" stroke="white" stroke-width="2"/>
              <path d="M20 13.5L10.25 19.1292L10.25 7.87083L20 13.5Z" fill="white"/>
            </svg> 
            </Icons2>
            <Icons2 name={'Watch Later'}>
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14" stroke="white" stroke-width="2"/>
            <line x1="14.5" y1="5" x2="14.5" y2="19" stroke="white" stroke-width="3"/>
            <line x1="13.431" y1="17.5633" x2="23.431" y2="20.5633" stroke="white" stroke-width="3"/>
            </svg>
            </Icons2>
            </>
          </div>
        }
               
      </div>
  )
}    

export default Sidebar

const Icons = ({children,name}) => {
  console.log(name)
  return(
  <div className='py-5 w-full flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-red-900'>
    {children}
    <p className='text-xs'>{name}</p>
  </div>
  )
}

const Icons2 = ({children, name}) => {
  return(
    <div className='flex w-full rounded-lg hover:bg-red-900'>
      <div className='w-14 flex h-11 items-center justify-center'>
        {children}
      </div>
      <p className='w-full px-3 flex items-center'>{name}</p>
    </div>
  )
}