import React from 'react'
import { useSelector } from 'react-redux';

const Dishes = () => {

    const { singleRestaurants } = useSelector((state) => state.restaurant);
    const { popularDishes, cuisine } = singleRestaurants;

    return (
        <>
            <div className='flex flex-col gap-5 cursor-text m-4'>
                <div className='flex flex-col gap-2'>
                    <h2 className=' text-2xl font-semibold'>Cuisine</h2>
                    <p className=' text-gray-500 xm:text-xl md:text-xl lg:text-xl xl:text-xl text-md tracking-wider'>

                        {
                            cuisine && cuisine.map((item) => {
                                return (item)
                            })
                        }

                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className=' text-2xl font-semibold'>Popular Dishes</h2>
                    <p className=' text-gray-500 xm:text-xl md:text-xl lg:text-xl xl:text-xl text-md tracking-wider'>

                        {
                            popularDishes && popularDishes.map((item) => {
                                return (item)
                            })
                        }

                    </p>
                </div>
            </div>
        </>
    )
}

export default Dishes