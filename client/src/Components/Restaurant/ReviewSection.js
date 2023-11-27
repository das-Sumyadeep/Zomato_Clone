import React from 'react'
import { BiSolidUserCircle, BiSolidStar } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const ReviewSection = (props) => {

    let { review, user, restaurant, createdAt } = props;
    const { id } = useParams();

    return (
        <>
            {
                restaurant === id &&
                review && review.map((review, index) => {
                    return (



                        <div className='mx-3 py-3 border-b-2 flex flex-col gap-2 ' key={index}>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='rounded-full w-12 h-12 '>
                                    <BiSolidUserCircle className='w-full h-full text-gray-400' />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h2 className='text-lg font-medium'>{user.fullname}</h2>
                                    <p className='text-md text-gray-500'>{createdAt?.substring(0, 10)}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='border-2 text-white flex items-center gap-1 px-2 py-1 rounded-lg '
                                    style={{ backgroundColor: review.ratings <= 2 ? '#FF6363' : 'green' }}
                                >
                                    <p className='text-sm font-semibold'>{review.ratings}</p>
                                    <BiSolidStar className='w-3 h-3' />
                                </div>

                                {
                                    review.isFood ?
                                        <p className='font-light text-md border-b-2 border-green-800 border-dotted text-black'> Food </p>
                                        : <p className='font-light text-md border-b-2 border-green-800 border-dotted text-black'> Restaurant </p>
                                }
                            </div>

                            <p className='text-lg text-gray-700 font-light my-2'>{review.reviewText}</p>
                        </div>

                    )
                })
            }
        </>
    )
}

export default ReviewSection