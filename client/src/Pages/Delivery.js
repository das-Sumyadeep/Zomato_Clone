import React from 'react'
import FoodList from '../Components/Delivery/FoodList';
import BrandList from '../Components/Delivery/TopBrand';
import FoodCarousal from '../Components/Delivery/FoodCarousal';
import BrandCarousal from '../Components/Delivery/BrandCarousal';
import DeliveryRestaurantList from '../Components/Delivery/RestaurantList'

const Delivery = () => {

  return (
    <>
      {/* ........ mobile view ........... */}
      <div className='hidden sm:block xs:block'>
        <h1 className='m-4 text-xl font-medium '>Inspiration for your first order</h1>
        <div className='container mx-auto px-1'>
          <div className='flex flex-wrap items-center justify-evenly gap-3'>
            <FoodList />
          </div>
        </div>
        <h1 className='m-4 text-xl font-medium '>Top brands for you</h1>
        <div className='container mx-auto px-3'>
          <div className='flex items-center justify-start gap-4 py-3 overflow-x-auto'>
            <BrandList />
          </div>
        </div>
        <h1 className='m-4 text-xl font-medium '>Delivery Restaurants in Guwahati</h1>
        <div className='container mx-auto px-3 mt-6'>
          <DeliveryRestaurantList />
        </div>
      </div>

      {/* ........ tablet view ........... */}
      <div className='sm:hidden xs:hidden xl:hidden lg:hidden'>
        <div className='bg-Zomato-900 h-72 my-6'>
          <h1 className='p-5 text-2xl font-medium '>Inspiration for your first order</h1>
          <div className='container mx-auto mt-6 xm:px-6'>
            <FoodCarousal />
          </div>
        </div>
        <h1 className='m-6 text-2xl font-medium '>Top brands for you</h1>
        <div className='container mx-auto mt-6 xm:px-6'>
          <BrandCarousal />
        </div>
        <h1 className='m-4 text-2xl font-medium '>Delivery Restaurants in Guwahati</h1>
        <div className='container mx-auto mt-6'>
          <DeliveryRestaurantList />
        </div>
      </div>

      {/* ........ laptop view ........... */}
      <div className='hidden lg:block xl:block container mx-auto'>
        <div className='h-72 my-6 '>
          <h1 className='p-5 text-2xl font-medium '>Inspiration for your first order</h1>
          <div className='container mx-auto mt-6 px-8 '>
            <FoodCarousal />
          </div>
        </div>
        <h1 className='mx-6 text-2xl font-medium pt-12'>Top brands for you</h1>
        <div className='container mx-auto mt-6 px-8'>
          <BrandCarousal />
        </div>
        <h1 className='mx-6 text-2xl font-medium pt-12'>Delivery Restaurants in Guwahati</h1>
        <div className='container mx-auto mt-6 '>
          <DeliveryRestaurantList />
        </div>
      </div>

    </>
  )
}

export default Delivery;