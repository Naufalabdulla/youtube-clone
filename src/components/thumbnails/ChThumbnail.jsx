import React from 'react'

const ChThumbnail = () => {
  return (
    <div className='flex w-full items-center'>
        <div className='w-[240px] flex justify-center'>
          <img src="//yt3.googleusercontent.com/e5wX9w1xSFUjaUdyhFugYZKzDZ_KLTLWBgdtRohHQDu0pshH867pyOv6gLGuqkqy5Ik8bJ9MSZU=s176-c-k-c0x00ffffff-no-rj-mo" className='rounded-full' alt="" />
        </div>

        <div>
            <h1 className='font-bold text-xl'>Kanata Ch. 天音かなた</h1>
            <p className='font-light text-sm'>@AmaneKanata • 1,45M subscriber</p>
            <p className='line-clamp-1 text-sm'>へい！ホロライブ4期生、天音かなたです。PP天使 ...</p>
        </div>

        <button className='button-s self-justify-end'>Subscribe</button>
    </div>
  )
}

export default ChThumbnail