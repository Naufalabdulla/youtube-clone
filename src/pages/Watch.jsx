import React from 'react'
import { YThumbnail, SubNavbar } from '../components'


const Watch = () => {

  const Comment = () => {
    return(
      <div className='flex gap-3'>
        <img src="./images/quantum.jpg" className='object-cover w-12 h-12' alt="" />
        <div>
          <div className='flex items-center gap-2'>
            <h2 className='font-extrabold'>@someone</h2>
            <p className='text-sm'>5 days ago</p>
          </div>
          <h2 className='font-bold my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, assumenda nemo adipisci, ipsam vel aperiam magni blanditiis incidunt minus rem debitis aut consectetur dolores ducimus voluptas repudiandae alias ipsum fugit.</h2>
          <div className='flex gap-2 items-center'>
            <button className='button-s'>V</button>
            <button className='button-s'>A</button>
            <p className='text-sm font-extrabold'>Balas</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-12 px-6 gap-2'>
      <div className='main col-span-8'>
        <div className=' h-[506px] bg-slate-800'>
          film
        </div>
        <div className=''>
          <div>
            <h1 className='font-bold text-xl my-1'>【歌枠】SINGING STREAM volumeUPver.【ホロライブ / 星街すいせい】</h1>
            <div className='flex justify-between my-1'>
              <div className='flex w-full items-center'>
                <img src="./images/quantum.jpg" className='object-cover h-12 w-12 rounded-full' alt="" />
                <div className='mx-2'>
                  <h3 className='text-lg font-bold'>Suisei Channel</h3>
                  <p className='text-xs'>2,30 subscriber</p>
                </div>
                <button className='button-s ms-auto'>Subscribe</button>
              </div>
              <div className='flex w-full flex-row-reverse items-center gap-2'>
                <button className='button-s bg-slate-400'>...</button>
                <button className='button-s bg-slate-400'>foo Clip</button>
                <button className='button-s bg-slate-400'>fooo Share</button>
                <button className='button-s bg-slate-400'>foooooooo Like</button>
              </div>
            </div>
            <div className='bg-third rounded-lg p-2 my-2'>
              <p className={``}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam ratione enim. Cumque perferendis dolor aut harum est laudantium nisi incidunt distinctio accusamus! Quia consequatur ut ullam ex quidem pariatur fugiat, harum nostrum minus, commodi iure deleniti voluptatem dicta optio at soluta asperiores iusto velit! Omnis, nesciunt est? Ad inventore aspernatur ab nobis consequuntur nam id autem quo amet quia vitae eum, consequatur, alias velit, quisquam enim excepturi perferendis nisi eos. Maiores neque fugiat est maxime cum dolor eos in qui atque dolorum minima, assumenda dolore nulla sit fuga tempora officia vero deleniti. Fugiat vel, veniam accusantium sunt molestiae nobis!</p>
            </div>
          </div>
        </div>
        <div className='comment'>
            <h1 className='text-xl font-extrabold mb-3'>240 Comment</h1>
            <div className='flex flex-col gap-5'>
              <Comment />
              <Comment />
              <Comment />
            </div>
        </div>
      </div>

      <div className='col-span-4'>
        <SubNavbar />
        <div className='flex flex-col gap-4'>
          <YThumbnail/>
        </div>
      </div>
    </div>
  )
}

export default Watch
