import React, { useState } from 'react'
import ReviewSection from './ReviewSection'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../../Redux/User/UserSlice';
import { updateReview } from '../../Redux/Review/ApiCalls';

const Review = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const { token, User } = useSelector(state => state.user);

    const [review, setReview] = useState(false);
    const [formData, setFormData] = useState({
        ratings: '5',
        reviewType: 'Food',
        reviewText: ''
    });

    const handleReview = () => {

        if (User._id) {

            setFormData({
                ratings: '5',
                reviewType: 'Food',
                reviewText: ''
            })
            setReview((prev) => prev = !prev);
        } else {
            dispatch(status("Unauthorized User"));
        }
    }

    const onChangeHandler = (event) => {

        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value

        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setReview((prev) => !prev);
        updateReview(params.id, User._id, formData, token, dispatch);
        
    }


    const { singleRestaurants } = useSelector((state) => state.restaurant);
    const { name } = singleRestaurants;
    const { allReview, isLoading } = useSelector((state) => state.review);

    return (
        <>
            <div className='flex items-center mr-3 justify-between mt-4 border-b-2'>
                {
                    isLoading && (

                        <h1 className='font-medium text-2xl text-green-600 text-center'>Loading...</h1>

                    )
                }
                <h2 className='p-3 text-2xl font-semibold'>{name} Review</h2>
                <button className='border-2 border-black text-md xl:text-xl lg:text-xl rounded-lg px-2 py-1 hover:bg-red-500 hover:text-white hover:border-white'
                    onClick={handleReview}
                >Add Review</button>
            </div>


            <div className=' text-white bg-Zomato-1001 top-0 left-0 fixed w-full h-full mx-auto' style={{ display: review ? 'block' : 'none' }}>
                <div className='w-1/2 xl:w-1/3 lg:1/3 xs:w-80 sm:w-96 xm:w-2/3 md:w-2/3 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-end'>
                    <div
                        className='text-3xl cursor-pointer bg-red-500 rounded-full w-12 text-center pb-2 my-2'
                        onClick={() => setReview(false)}
                    >&times;</div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-4 rounded-lg bg-Zomato-1000 w-full h-full '>
                        <div className='flex items-center justify-start gap-x-3'>
                            <label className='xl:text-lg lg:text-lg xs:text-md font-semibold '>Ratings:</label>
                            <select name='ratings' onChange={onChangeHandler} value={formData.ratings} className='w-80 sm:w-52 xs:w-48 px-2 py-1 lg:text-lg xl:text-lg sm:text-md xs:text-md text-gray-600 outline-none'>
                                <option value="5">5 - Excellent</option>
                                <option value="4">4 - Very Good</option>
                                <option value="3">3 - Good</option>
                                <option value="2">2 - Average</option>
                                <option value="1">1 - Worst</option>
                            </select>
                        </div>

                        <div className='flex items-center justify-start gap-x-3'>
                            <label className='xl:text-lg lg:text-lg xs:text-md font-semibold '>Review For:</label>
                            <div className='xl:text-lg lg:text-lg xs:text-md'>
                                <input type="radio" value='Food' name='reviewType' onChange={onChangeHandler} checked={formData.reviewType === 'Food'} className=' cursor-pointer' />
                                <label className='px-1' >Food</label>
                            </div>
                            <div className='xl:text-lg lg:text-lg xs:text-md'>
                                <input type="radio" value="Restaurant" name='reviewType' onChange={onChangeHandler} checked={formData.reviewType === 'Restaurant'} className=' cursor-pointer' />
                                <label className='px-1'>Restaurant</label>
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-y-3'>
                            <label className='xl:text-lg lg:text-lg xs:text-md font-semibold '>Review:</label>
                            <textarea id="reviewText" name="reviewText" onChange={onChangeHandler} value={formData.reviewText}
                                placeholder='Write Your Review...'
                                className='xl:text-lg lg:text-lg xs:text-md text-gray-600 p-3 w-full h-32 placeholder:text-red-500 outline-none' />
                        </div>

                        <button type="submit" className='bg-red-300 text-lg p-2 w-full text-white focus:bg-red-500 hover:bg-red-500 font-semibold rounded-md cursor-pointer'>Submit</button>
                    </form>
                </div>
            </div>



            {
                allReview && allReview.map((review, index) => {
                    return (
                        <div key={index}>

                            <ReviewSection {...review} />
                        </div>
                    )
                })
            }

        </>
    )
}

export default Review