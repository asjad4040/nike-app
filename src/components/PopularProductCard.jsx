import React from 'react'
import { FaStar } from "react-icons/fa";
const PopularProductCard = ({imageUrl, name, price}) => {
  return (
    <div className="flex flex-1 w-full max-sm:w-full flex-col">
      <img src={imageUrl} alt={name} className="w-[282px] h-[282px]" />
      <div className='mt-8 flex justify-start items-center gap-2.5'>
        <FaStar width={24} height={24} color='orange'/>
        <p className="font-mono text-xl leading-normal text-slate-500">(4.5)</p>
      </div>
      <h3 className="text-xl mt-2 leading-normal font-semibold">{name}</h3>
      <p className='mt-2 text-2xl leading-normal font-semibold'>{price}</p>
    </div>
  )
}

export default PopularProductCard
