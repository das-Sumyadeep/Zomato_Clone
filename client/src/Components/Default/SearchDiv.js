import React from 'react'
import { FaStar } from 'react-icons/fa'

const SearchDiv = (props) => {

    let {images, name, address, type} = props;
    return (
        <div className='flex items-start justify-start gap-3 my-5 '>
            <div className='h-20 xs:w-28 sm:w-32 md:w-32 xm:w-32 xl:w-36 lg:w-36'>
                <img src={images.photos[0]} alt='' className='w-full h-full rounded-lg' />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{name}</p>
                <div className='flex items-center justify-start gap-2'>
                    <div className='flex justify-start w-12 h-6 xm:w-10 xm:h-5 md:w-16 md:h-8 items-center md:gap-2 gap-1 text-white xm:text-md md:text-md text-sm px-2 bg-green-700 rounded-md font-medium'>
                        <p>4.0</p>
                        <FaStar className='md:w-4 md:h-4 xm:w-4 xm:h-4 w-3 h-3' />
                    </div>
                    <span className='border-dotted border-b-2 border-green-700 xm:text-md md:text-md text-md'>{type}</span>
                </div>
                <p className='text-sm xm:text-md md:text-md lg:text-md xl:text-md text-gray-500'>{address}</p>
            </div>
        </div>
    )
}

export default SearchDiv