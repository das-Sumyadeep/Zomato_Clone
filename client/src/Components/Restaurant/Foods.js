import React from 'react'
import { useParams } from 'react-router-dom'
import NonVeg from '../../Assets/NonVeg.png';
import Veg from '../../Assets/Veg.png';
import Food from '../../Assets/defaultFood.png'
import { useDispatch, useSelector } from 'react-redux';
import { InCart } from '../../Redux/Cart/ApiCalls';
import { status } from '../../Redux/User/UserSlice';

const Foods = (props) => {

    const params = useParams();
    const dispatch = useDispatch();
    const { token, User } = useSelector(state => state.user);
    const handleCart = (id) => {

        if(User._id) {

            const orderDetails = {
                restaurant: params.id,
                food: id,
                quantity: 1
            };
            // Dispatch the action with the updated state
            InCart(User._id, params.id, dispatch, orderDetails, token);
        }else{
            dispatch(status("Unauthorized User"));
        }

    };

    return (
        <>
            {
                props.item && props.item.map((item, index) => {

                    let { name, desc, isNonVeg, price, _id } = item;

                    return (
                        <div className='flex items-start justify-start gap-3' key={index}>
                            <div className='h-20 w-48 md:w-32 xm:w-32 xl:w-36 lg:w-36 border-2'>
                                <img src={Food} alt='' className='w-full h-full rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center justify-start gap-2'>
                                    {
                                        isNonVeg ?
                                            (<div className='w-4 h-4'>
                                                <img src={NonVeg} alt='' className='w-full h-full' />
                                            </div>) :
                                            (<div className='w-4 h-4'>
                                                <img src={Veg} alt='' className='w-full h-full' />
                                            </div>)
                                    }

                                    <p className='text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{name}</p>
                                </div>
                                <div className='flex items-center justify-between '>
                                    <p className='text-gray-500 text-md'>₹ {price}</p>
                                    <button className='px-2 py-1 rounded-lg w-16 text-sm border-black border-2 hover:bg-red-500 hover:text-white hover:font-semibold hover:border-white' onClick={() => handleCart(_id)}>Add</button>
                                </div>
                                <p className='text-sm xm:text-md md:text-md lg:text-md xl:text-md text-gray-500'>{`${desc?.substring(0, 50)}....`}</p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default Foods