import React from 'react'

function Pagenation({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-gray-300 p-3 mt-8 flex justify-center'>
      <div onClick={handlePrev} className='px-8'><i class="fa fa-arrow-left"></i></div>
      <div className='font-bold'>{pageNo}</div>
      <div onClick={handleNext} className='px-8'><i class="fa fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagenation
