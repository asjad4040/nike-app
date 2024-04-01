import React from 'react'
import { products } from '../data'
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id='products' className="container max-sm:mt-12">
      <div className='flex flex-col justify-start gap-5'>
        <h2 className="font-bold text-4xl font-sans">Our <span className="text-red-500">Popular</span> Produvts</h2>
        <p className="max-lg:max-w-lg mt-2 font-mono text-slate-500"> Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product)=>(
          <PopularProductCard key={product.name} imageUrl={product.imgURL} name={product.name} price={product.price}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
