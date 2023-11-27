import React from 'react'
import { FaStar } from 'react-icons/fa'

export const SmRestaurantCard = (props) => {

    return (
        <>
            <div className='flex flex-col gap-2 rounded-lg shadow-xl border-2'>
                <div className='w-full h-full'>
                    <img src={props.src} alt={props.name} className='w-full h-full rounded-t-lg' />
                </div>
                <div className='pb-8 px-3 flex justify-between items-start'>
                    <div>
                        <h1 className='text-lg font-medium tracking-wide'>{props.name}</h1>
                        <p className='text-sm text-gray-500 font-medium tracking-wide'>{props.cuisine}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 text-white bg-green-700 rounded-lg p-1 h-6 font-medium'>
                        <p>4.0</p>
                        <FaStar className='w-3 h-3' />
                    </div>
                </div>
            </div>
        </>
    )
}
export const MdRestaurantCard = (props) => {
    
    return (
        <>
            <div className='flex flex-col gap-2 '>
                <div className='lg:w-80 xl:w-96 h-40 xm:h-44 lg:h-52 xl:h-64'>
                    <img src={props.src} alt={props.name} className='w-full h-full rounded-t-lg' />
                </div>
                <div className='pb-8 flex items-start justify-around border-b-2 shadow-lg'>
                    <div>
                        <h1 className='xs:text-sm text-md font-medium'>{props.name}</h1>
                        <p className='xs:text-xs text-sm text-gray-500 font-medium'>{props.cuisine}</p>
                    </div>
                    <div className='flex justify-center items-center gap-1 text-sm text-white bg-green-700 rounded-lg p-1 h-6'>
                        <p>4.0</p>
                        <FaStar className='w-3 h-3' />
                    </div>
                </div>
            </div>
        </>
    )
}



