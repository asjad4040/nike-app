import React from 'react'
import Button from '../components/Button'
import { FaArrowRight } from "react-icons/fa";
import { offer } from '../assets/images';
const SpecialOffer = () => {
  return (
    <section id='special-offer' className='flex justify-between items-center max-lg:flex-col-reverse gap-10 container'>
      <div className='flex-1'>
        <img src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-bold'><span className="text-red-500">Special</span>Product</h2>
        <p className='mt-4'> Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
        <p className='mt-4'>  Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label={"Shop now"} iconComp={<FaArrowRight />} />
          <Button label={"Learn more"} backgroundColor="bg-white" borderColor={"border-slate-500"} textColor={"text-slate-500"} />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer
