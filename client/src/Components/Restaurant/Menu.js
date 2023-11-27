import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useSelector } from 'react-redux';

const Menu = () => {

    const [file, setFile] = useState(null);
    const [src, setSrc] = useState(null);

    const handlePhoto = (id) => {
        let newFile = file.filter((menu, index) => {
            return id === index ? menu : null;
        })

        setSrc(newFile);
    }

    const { singleRestaurants } = useSelector((state) => state.restaurant);
    const { name, menuImages } = singleRestaurants;

    return (
        <>
            <div className='flex items-start flex-col gap-3 mt-6'>
                <h2 className='px-3 text-2xl font-semibold'>{name} Menu</h2>
                <div className='flex items-center justify-start gap-3 py-2 overflow-x-auto'>
                    {
                        menuImages && menuImages.menus.map((menu, index) => {
                            return (

                                <div className='flex flex-col gap-2 justify-center items-start px-3 h-64 w-44 cursor-pointer' key={index}>
                                    <div className='w-40 h-48 sm:h-44 xs:w-36 xs:h-40'>
                                        <img
                                            src={menu.src[0]}
                                            alt=''
                                            className='rounded-lg w-full h-full border-2'
                                            onClick={() => setFile(menu.src)}
                                        />
                                    </div>
                                    <p className='text-lg font-medium'>{menu?.category}</p>
                                    <p className='text-md text-gray-500'>{menu?.src.length} Pages</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='lg:hidden xl:hidden'>

                <div className='cursor-text fixed top-0 left-0 z-50 bg-Zomato-50 w-full h-full mx-auto ' style={{ display: file ? 'block' : 'none' }}>
                    <div className='flex py-3 gap-2 overflow-x-auto'>
                        <ImCross onClick={() => setFile(null)} className='absolute top-4 right-10 text-2xl font-bolder z-50 cursor-pointer text-white' />
                        {
                            file?.map((src, index) => {
                                return (

                                    <img src={src} key={index} alt='' className='w-screen h-screen py-10 px-10' />


                                )
                            })
                        }
                    </div>

                </div >
            </div>

            <div className='hidden lg:block xl:block'>
                <div className='cursor-pointer fixed top-0 left-0 z-50 bg-Zomato-50 w-full h-full mx-auto ' style={{ display: file ? 'block' : 'none' }}>
                    <div className='flex py-3 gap-6 overflow-x-auto'>
                        <ImCross onClick={() => setFile(null)} className='absolute top-4 right-10 text-2xl font-bolder z-50  text-white' />
                        {
                            file?.map((src, index) => {
                                return (

                                    <img src={src} key={index} alt='' className='w-72 h-3/6 py-16' onClick={() => handlePhoto(index)} />
                                )
                            })
                        }
                    </div>

                </div >

                <div className='cursor-pointer fixed top-0 left-0 z-50 bg-Zomato-50 w-full h-full mx-auto ' style={{ display: src ? 'block' : 'none' }}>
                    <div className='flex items-center justify-center'>
                        <ImCross onClick={() => setSrc(null)} className='absolute top-4 right-10 text-2xl font-bolder z-50  text-white' />
                        {
                            src &&
                            (<div className='w-1/2 h-1/2 overscroll-auto'>
                                <img src={src} alt='' className='px-32 py-6 w-full h-full' />
                            </div>)
                        }
                    </div>

                </div >

            </div>

        </>
    )
}

export default Menu