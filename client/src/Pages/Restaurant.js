import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BsCamera } from 'react-icons/bs'
// import { BiSolidDirectionRight, BiBookmarkPlus } from 'react-icons/bi'

import Gallery from '../Components/Restaurant/Gallery';
import Description from '../Components/Restaurant/Description';
import Menu from '../Components/Restaurant/Menu';
import Review from '../Components/Restaurant/Review';
import OrderSection from '../Components/Restaurant/OrderSection';
import Dishes from '../Components/Restaurant/Dishes'
import SubNav from '../Components/Restaurant/SubNav';
// import Location from '../Components/Restaurant/Location'
import RestaurantImg from '../Assets/defaultRestaurant.png'

const Restaurant = () => {

    const [photos, setPhotos] = useState(false);
    const [file, setFile] = useState(null);
    const params = useParams();

    const { singleRestaurants, isLoading } = useSelector((state) => state.restaurant);
    const { images } = singleRestaurants;

    return (
        <>
            {
                isLoading && (

                    <h1 className='font-medium text-2xl text-green-600 text-center'>Loading...</h1>

                )
            }
            {/* mobile and tablet view */}
            <div className='lg:hidden xl:hidden'>
                <div className='flex items-center justify-between my-4 px-4 cursor-pointer'>
                    <div
                        className='flex items-center justify-start gap-2 relative font-medium text-black bg-gray-200 w-32 xm:w-44 md:w-44 rounded-lg p-2 border-2' onClick={() => setPhotos((prev) => !prev)}>
                        <span className='w-5 h-5 md:w-8 md:h-6 xm:w-8 xm:h-6'><BsCamera className='w-full h-full' /></span>
                        <h1 className=' md:text-xl xm:text-xl text-sm '>View Gallery</h1>
                    </div>

                    <div className='flex items-center justify-end gap-2'>
                        <div className='flex justify-start w-12 h-6 xm:w-16 xm:h-8 md:w-16 md:h-8 items-center xm:gap-2 md:gap-2 gap-1 text-white xm:text-xl md:text-xl text-sm px-2 bg-green-700 rounded-lg font-medium'>
                            <p>4.0</p>
                            <FaStar className='md:w-4 md:h-4 xm:w-4 xm:h-4 w-3 h-3' />
                        </div>
                        <span className='border-dotted border-b-2 border-green-700 xm:text-xl md:text-xl text-md'>Ratings</span>
                    </div>
                </div>
                <Description />
                <OrderSection />
                {
                    photos && (<Gallery />)
                }
                <Menu />
                {/* <Location /> */}
                <Dishes />
                <Review />

            </div>



            {/* laptop and destop view */}
            <div className='hidden lg:block xl:block container mx-auto'>
                <div className='flex items-start gap-5 mt-5 w-full'>

                    <div className='max-h-full h-88 max-w-full w-96'
                        onClick={() => setFile(images?.photos[0])}
                    >
                        <img src={

                            images ? images.photos[0] : RestaurantImg

                        } alt='' className='w-full h-full rounded-lg shadow-lg object-contain' />
                    </div>

                    <div className='flex items-start flex-col'>

                        <div className='flex items-center my-4 px-4 space-x-24'>
                            <NavLink to={`/${params.type}/${params.id}/photos`}>
                                <div
                                    className='flex items-center justify-start gap-2 relative font-medium text-black bg-gray-200 w-32 xm:w-44 md:w-44 lg:w-44 xl:w-44 rounded-lg p-2 border-2 cursor-pointer '
                                >
                                    <span className='w-5 h-5 md:w-8 md:h-6 xm:w-8 xm:h-6 lg:w-10 lg:h-8 xl:w-10 xl:h-8'><BsCamera className='w-full h-full' /></span>
                                    <h1 className=' md:text-xl xm:text-xl text-sm lg:text-lg xl:text-lg'>View Gallery</h1>
                                </div>
                            </NavLink>
                            <div className='flex items-center justify-end gap-2 cursor-pointer '>
                                <div className='flex justify-start w-12 h-6 xm:w-16 xm:h-8 md:w-16 md:h-8 items-center xm:gap-2 md:gap-2 gap-1 text-white xm:text-xl md:text-xl text-sm px-2 bg-green-700 rounded-lg font-medium'>
                                    <p>4.0</p>
                                    <FaStar className='md:w-4 md:h-4 xm:w-4 xm:h-4 w-3 h-3' />
                                </div>
                                <span className='border-dotted border-b-2 border-green-700 xm:text-xl md:text-xl text-md'>Ratings</span>
                            </div>
                        </div>
                        <Description />
                    </div>

                </div>
                <div className='fixed top-0 left-0 z-50 bg-Zomato-50 w-full h-full mx-auto' style={{ display: file ? 'block' : 'none' }}>

                    <div className='flex gap-4 py-3 overflow-auto '>
                        <span
                            className='absolute top-1 right-5 text-5xl font-bolder z-50 cursor-pointer text-white'
                            onClick={() => setFile(null)}
                        >&times;</span>

                        <img src={file} alt='' className=' max-w-full max-h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                    </div>
                </div>
                {/* <div className='flex items-center justify-start gap-x-5 mt-8'>
                    <button className='flex items-center gap-2 border-2 border-gray-400 rounded-md px-3 py-1 lg:text-xl xl:text-xl'><BiSolidDirectionRight className='text-3xl text-red-400' /><span>Direction</span></button>
                    <button className='flex items-center gap-2 border-2 border-gray-400 rounded-md px-3 py-1 lg:text-xl xl:text-xl'><BiBookmarkPlus className='text-2xl text-red-400' /><span>Bookmark</span></button>
                </div> */}
                <SubNav {...params} />
                <Outlet />
            </div>

        </>
    )
}

export default Restaurant;