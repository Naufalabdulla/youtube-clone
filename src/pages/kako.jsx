import React from 'react'

const kako = () => {
  return (
    // <div className='h-screen bg-slate-500 overflow-auto flex flex-wrap'>
    //   <div className='sticky top-0 flex w-full'>sticky</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
    //   <div className='h-screen flex justify-center items-center'>item</div>
      
      // {/* sticky experiment */}
      // {/* <div className='h-screen bg-green-900 sticky top-20 flex hfi'>d</div>
      // <div>
      //   <div className='h-screen bg-red-900'>ss</div>
      //   <div className='h-screen bg-red-900'>ss</div>
      // </div> */}
    // </div>
    // <div className='bg-blue-700 w-screen h-screen flex flex-col overflow-auto'>
    //   <div className='bg-red-400 w-fit'>halo</div>
    //   <div className='bg-red-900 sticky top-0 w-screen'>halo</div>
    //   <div className='bg-red-900 w-screen'>halo</div>
    // </div>
    <div className='bg-slate-500 grid grid-cols-12 gap-1'>
      <div className='col-4 h-screen bg-blue-700 sticky top-0'>jodo</div>
      <div className='col-8'>
        <div className='h-screen bg-red-500'>sooso</div>
        <div className='h-screen bg-red-500'>sooso</div>
      </div>
    </div>
  )
}

export default kako