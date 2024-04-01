
import './App.css'
import Navbar from './components/Navbar'
import {Hero,Footer,SuperQuality,CustomerReviews,Services,SpecialOffer,PopularProducts, Subscribe} from './sections/index'
function App() {


  return (
    <main className="relative m-0 p-0">
      <Navbar/>
      <section className="xl: p-1 wide: pr-0 pb-0 my-12">
        <Hero/>
      </section>
      <section className="p-0 my-12">
        <PopularProducts/>
      </section>
      <section className="px-0 py-10 my-12">
        <Services/>
      </section>
      <section className='p-0 my-12'>
        <SuperQuality/>
      </section>
      <section className='p-0 my-12'>
        <SpecialOffer/>
      </section>
      <section className='p-0 '>
        <CustomerReviews/>
      </section>
      <section className='w-full py-16 px-0 sm:py-32'>
        <Subscribe/>
      </section>
      <section className='pb-8 px-0 bg-black pt-0'>
        <Footer/>
      </section>

    </main>
  )
}

export default App
