import React, { useState } from 'react'
import { statistics, shoes } from '../data'
import Button from '../components/Button'
import { bigShoe1 } from '../assets/images';
import { FaArrowRight } from "react-icons/fa";
import ShoeCard from '../components/ShoeCard';
const Hero = () => {
  const [bigShoeImg, setBigShoeImg]=useState(bigShoe1);
  return (
    <section id='home'
    className="flex xl:flex-row flex-col w-full  gap-10 min-h-screen container">
      <div className="relative flex flex-col w-2/5 justify-center items-start max-xl:px-0 pt-28">
        <p className='text-xl font-mono text-red-500'>Our Summer Collection</p>
        <h1 className="mt-10 font-mono text-8xl max-sm:text-[72px] max-sm: leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">
            The New Arrival
            </span>
          <br />
          <span className="inline-block text-red-500 mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-500 font-mono text-lg leading-8 mt-6 mb-14"> Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
        <Button label={"Shop Now"} iconComp={<FaArrowRight/>}/>
        <div className="flex justify-start items-start gap-16 mt-20 w-full flex-wrap">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-mono font-bold">{stat.label}</p>
              <p className='leading-7 font-bold font-mono'>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" width={500} height={400} className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image,index)=>(
            <div key={index}>
              <ShoeCard index={index}
              imgUrl={image}
              changeBigShoeImg={(shoe)=>setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
