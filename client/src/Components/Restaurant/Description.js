import React from 'react'
import { useSelector } from 'react-redux';

const Description = () => {

    const { singleRestaurants } = useSelector((state) => state.restaurant);
    const { name, address, city, cuisine, contactNumber } = singleRestaurants;

    return (
        <>
            <div className='px-4 flex flex-col gap-3 cursor-text'>
                <div className='flex flex-col gap-2'>
                    <h1 className='xl:text-4xl lg:text-4xl xm:text-4xl md:text-4xl text-3xl font-medium tracking-wider'>{name}</h1>

                    <p className=' text-gray-500 xm:text-xl md:text-xl text-md lg:text-xl xl:text-xl tracking-wider'>
                        {
                            cuisine && cuisine.map((item) => {
                                return (item)
                            })
                        }
                    </p>
                    <div className='flex flex-col items-start gap-y-2'>

                        <p className=' text-gray-500 xm:text-lg md:text-lg text-md lg:text-lg xl:text-lg tracking-wide'>{address},{city}</p>

                        <p className='md:text-lg xm:text-lg xl:text-xl text-red-500'><strong className='font-medium'>Call </strong>+91{contactNumber}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description