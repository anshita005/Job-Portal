import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import companies from '../data/companies.json'
import Autoplay from 'embla-carousel-autoplay';
const LandingPage = () => {
  return (
    <main className='flex flex-col gap 8 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-5xl font-extrabold'>Find Your Dream Job <span className='flex items-center gap-2 sm:gap-6 '>and get <img src="/logo.png" alt="Hirrd Logo" className='h-12 sm:h-24 lg:h-32' /></span></h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'> Explore thousands of job listings or find the perfect candidate</p>
      </section>
      <div className='flex gap-6 justify-center'>
        <Link to='/jobs'>
          <Button variant='blue' size='xl'> Find Jobs</Button>
        </Link>
        <Link to='/post-job'>
          <Button variant='destructive' size='xl' > Post a Job</Button>
        </Link>


      </div>
      <Carousel plugins={[
      Autoplay({ delay: 2000, stopOnInteraction: true})
      ]} className="w-full py-10">
      <CarouselContent className='flex gap-5 sm:gap-20 items-center'>
   {companies.map(({name, id, path})=>{
    return(
      <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
        <img src={path} 
        alt={name}
        className='h-9 sm:h-14 object-contain'
          />
      </CarouselItem>
    );

   })}
      </CarouselContent>
    </Carousel>

    {/* <img src="/banner.jpeg" className='w-full'/> */}

    </main>
  )
}

export default LandingPage;