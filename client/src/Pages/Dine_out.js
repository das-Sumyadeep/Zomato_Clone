import React from 'react';
import DiningRestaurantList from '../Components/Dining/RestaurantList';

const DineOut = () => {

  
  return (
    <>
      <div className='hidden sm:block xs:block'>
        <h1 className='mx-4 mt-4 text-xl font-medium '>Dining Restaurants in Guwahati</h1>
        <div className='container mx-auto px-3 mt-6'>
          <DiningRestaurantList />
        </div>
      </div>


      <div className='sm:hidden xs:hidden xl:hidden lg:hidden'>
        <h1 className='m-6 text-2xl font-medium '>Dining Restaurants in Guwahati</h1>
        <div className=' mt-6'>
          <DiningRestaurantList />
        </div>
      </div>

      <div className='hidden lg:block xl:block container mx-auto'>
        <h1 className='m-6 text-2xl font-medium '>Dining Restaurants in Guwahati</h1>
        <div className=' mt-6'>
          <DiningRestaurantList />
        </div>
      </div>

    </>
  )
}

export default DineOut;
