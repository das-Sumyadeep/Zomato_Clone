import React from 'react';
import NightlifeRestaurantList from '../Components/Nightlife/RestaurantList';

const NightLife = () => {

  return (
    <>
      <div className='hidden sm:block xs:block'>
        <h1 className='mx-4 mt-4 text-xl font-medium '>Nightlife Restaurants in Guwahati</h1>
        <div className='container mx-auto px-3 mt-6'>
          <NightlifeRestaurantList />
        </div>
      </div>


      <div className='sm:hidden xs:hidden xl:hidden lg:hidden'>
        <h1 className='m-6 text-2xl font-medium '>Nightlife Restaurants in Guwahati</h1>
        <div className=' mt-6'>

          <NightlifeRestaurantList />

        </div>
      </div>


      <div className='hidden lg:block xl:block container mx-auto'>
        <h1 className='m-6 text-2xl font-medium '>Nightlife Restaurants Guwahati</h1>
        <div className=' mt-6'>

          <NightlifeRestaurantList />

        </div>
      </div>
    </>
  )
}


export default NightLife;