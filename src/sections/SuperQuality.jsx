import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us'
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full container">
      <div className='flex flex-1 flex-col'>
        <h1>We Provide You <span className="text-red-500"> Super </span>
          <span className="text-red-500">Quality </span> Shoes</h1>
        <p className="lg:max-w-lg mt-4"> Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label={"View details"} />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt='product detail'
          width={570}
          height={522}
          className='object-contain' />
      </div>

    </section>
  )
}

export default SuperQuality
