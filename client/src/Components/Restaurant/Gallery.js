import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Gallery = () => {
    
    const [file, setFile] = useState(null);
    const { singleRestaurants } = useSelector((state) => state.restaurant);
    const { images, name } = singleRestaurants;

    return (
        <>
            <h2 className='p-3 text-2xl font-semibold'>{name} Photos</h2>
            <div className='flex items-center gap-5 m-3 flex-wrap'>
                {
                    images && images.photos.map((src, index) => {
                        return (
                            <div className='w-32 h-28 md:w-36 md:h-28 xm:w-40 xm:h-32 lg:w-72 lg:h-48 xl:w-72 xl:h-48' key={index}>
                                <img src={src} alt=''
                                    className='w-full h-full rounded-lg'
                                    onClick={() => setFile(src)}
                                />
                            </div>
                        )
                    })
                }

            </div>

            <div className='fixed top-0 left-0 z-50 bg-Zomato-50 w-full h-full mx-auto' style={{ display: file ? 'block' : 'none' }}>

                <div className='flex gap-4 py-3 overflow-auto '>
                    <span
                        className='absolute top-1 right-5 xl:top-24 xl:right-44 text-5xl font-bolder z-50 cursor-pointer text-white'
                        onClick={() => setFile(null)}
                    >&times;</span>

                    <div className='xl:max-w-1/2 xl:h-96 lg:max-w-1/2 lg:h-96 sm:w-3/4 xs:w-3/4 xm:w-3/4 xm:h-2/3 md:w-3/4 md:h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img src={file} alt='' className='w-full h-full' />
                    </div>

                </div>
            </div>


        </>
    )
}

export default Gallery