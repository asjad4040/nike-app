import React from 'react'
import { reviews } from '../data'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section id='customerReviews' className="container">
      <h3 className='font-mono text-center text-4xl font-bold'>What our<span className="text-red-500"> Customers </span>say</h3>
      <p className='m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} customerName={review.customerName} rating={review.rating} feedback={review.feedback} imgUrl={review.imgURL}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
