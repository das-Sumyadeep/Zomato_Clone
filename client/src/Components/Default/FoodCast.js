import React from 'react'

export const SmFoodCast = (props) => {

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className=' w-16 h-16 sm:w-20 sm:h-20'>
                    <img src={props.src}
                        alt={props.name} className='rounded-full w-full h-full' />
                </div>
                <h3 className='text-sm sm:text-md'>{props.name}</h3>
            </div>
        </>
    )
};


export const MdFoodCast = (props) => {

    return (
        <>
            <div className='flex flex-col items-center gap-2'>
                <div className=' w-32 h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44'>
                    <img src={props.src} 
                    alt={props.name} className='rounded-full w-full h-full'/>
                </div>
                    <h3 className='font-medium'>{props.name}</h3>                
            </div>
        </>
    )
};
