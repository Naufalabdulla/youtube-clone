import React from 'react'
import withLink from '../../utils/withLink'

const YThumbnail = (props) => {
  return (
    //something wrong with hweight and the width its not following the size inputed
    <div className={`max-w-[420px]`}>
        <img className={`min-w-full max-h-[236px] object-cover object-center`} src="../images/quantum.jpg" alt="" />

        <div className='flex gap-4'>
          images
            <div className='w-full'>
                <h1 className='font-bold line-clamp-2'>{props.data?.title}</h1>
                <p className='text-sm'>{props.data?.uploader}</p>
                <p className='text-sm'>{props.data?.watched} • {props.data?.uploaded}</p>
            </div>

            <div>•</div>{console.log(props.height)}
        </div>
    </div>
  )
}

export default withLink(YThumbnail)