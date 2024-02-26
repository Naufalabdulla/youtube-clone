import React from 'react'

const ChPlaylist = () => {
  return (
    <div className='h-fit min-w-[420px] max-w-[420px]'>
        <div className=''>
            <div className='flex gap-3 p-5 bg-third rounded-t-lg'>
                <img className='rounded-full w-28' src="//yt3.googleusercontent.com/e5wX9w1xSFUjaUdyhFugYZKzDZ_KLTLWBgdtRohHQDu0pshH867pyOv6gLGuqkqy5Ik8bJ9MSZU=s176-c-k-c0x00ffffff-no-rj-mo" alt="" />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl font-bold'>Kanata Ch</h1>
                    <p className='font-light text-sm'>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <img className='w-[420px] rounded-lg' src="../images/quantum.jpg" alt="" />
        </div>

        <div className='w-full'>
            <div className='flex border-b items-center py-1'>
                <div className='w-full'>
                    <h1 className='font-bold'>Lorem, ipsum.</h1>
                    <p className='font-light text-sm'>Lorem, ipsum dolor.</p>
                </div>
                <div className='font-light text-sm'>2.90</div>
            </div>
        </div>

        <div className='flex gap-2 my-3'>
            <div className='max-w-[100px]'>
                <div className='border-t border-4 rounded-t-lg border-third mx-2'/>
                <img className='w-[100px] h-[100px] object-cover rounded-lg' src="../images/quantum.jpg" alt="" />
                <h1 className='text-sm px-2'>Lorem, ipsum dolor.</h1> {/* adding text-clip to style. but i still dont know how to determine the max width for clip */}
            </div>  
        </div>

        <button className='w-full button-s'>view all</button>
    </div>
  )
}

export default ChPlaylist