import React from 'react'
import withLink from '../../utils/withLink'

const HThumbnail = (props) => {
  return (
    <div className='w-full'>
        <div className="flex gap-2">
            <img className='max-w-[240px] max-h-[180px]' src="../../images/quantum.jpg" alt="" />
            
            <div className="inline-block">
                <h2 className='line-clamp-2 font-bold'>{props.data?.title}</h2>
                <p>{props.data?.uploader}</p>
                <p>{props.data?.watched} • {props.data?.uploaded}</p>
            </div>

            <div>•</div>
        </div>
    </div>
  )
}

export default withLink(HThumbnail)