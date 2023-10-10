import React from 'react'

const SubNavbar = () => {
  return (
    <div className='max-w-full sticky top-0 bg-primary flex gap-3'>
    <Box name={'Semua'}/>
    <Box name={'Live'}/>
    <Box name={'Game'}/>
    <Box name={'Music'}/>
    <Box name={'Animation'}/>
    <Box name={'Action Game'}/>
    </div>
  )
}

export default SubNavbar

const Box = (props) => {
    return (
        <div className='rounded-md px-2 py-1 bg-secondary'>
            <p className='text-sm font-bold focus:text-black'>{props.name}</p>
        </div>
    )
}