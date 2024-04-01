import React from 'react'
import { FaStar } from "react-icons/fa";
const ReviewCard = ({imgUrl,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgUrl} alt="customer" className='object-cover rounded-full w-[120px] h-[120px]' />
      <p className="max-w-sm mt-6 text-center">{feedback}</p>
      <div className='mt-3 flex items-center justify-center gap-2.5'>
      <FaStar width={24} height={24} color='orange'/>
        <p className='text-xl font-sans text-slate-500'>{rating}</p>
      </div>
      <h3 className='text-center font-mono font-bold text-3xl mt-1'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
