import React from 'react'
import { FaRegCopy } from 'react-icons/fa';
import { BiSolidDirectionRight } from 'react-icons/bi'

const Location = () => {
    return (
        <>
            <div className='space-y-4 p-4 rounded-lg shadow-lg m-3 w-80 xl:w-1/4 lg:w-1/4'>
                <div className='flex items-start flex-col'>
                    <h2 className='lg:text-xl xl:text-xl'>Call</h2>
                    <p className='  text-red-500 tracking-wide'>+917578004591</p>
                </div>
                <div>
                    <h2 className='lg:text-xl xl:text-xl'>Direction</h2>
                    <div>
                        <img src="https://maps.zomato.com/php/staticmap?center=26.1539485856,91.7808748037&maptype=zomato&markers=26.1539485856,91.7808748037,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250" alt='' />
                    </div>
                    <p className='lg:text-lg xl:text-lg tracking-wide text-gray-600'>Shop 1, Dynasty Walford, G.S.Road, Christian Basti, Guwahati</p>
                </div>
                <div className='flex items-center justify-start gap-x-5 mt-2'>
                    <button className='flex items-center gap-2 border-2 border-gray-400 rounded-md px-2 py-1 lg:w-28 lg:text-xl xl:text-xl text-md'><FaRegCopy className='text-2xl' /><span>Copy</span></button>
                    <button className='flex items-center gap-2 border-2 border-gray-400 rounded-md px-2 py-1 lg:w-28 lg:text-xl xl:text-xl text-md'><BiSolidDirectionRight className='text-3xl text-red-400' /><span>Direction</span></button>
                </div>
            </div>
        </>
    )
}

export default Location