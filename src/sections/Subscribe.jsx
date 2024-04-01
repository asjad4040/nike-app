import React from 'react'
import Button from '../components/Button'
const Subscribe = () => {
  return (
    <section id='contact-us' className='container flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-mono font-bold'>Sign up for<span className="text-red-500"> Updates </span>& Newsletters</h3>
      <div className='lg:max-w-[40%] w-full flex items-center justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-500 rounded-full'>
        <input type="text" placeholder='asjadabr40@gmail.com' className='input'/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label={"Sign Up"} fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
