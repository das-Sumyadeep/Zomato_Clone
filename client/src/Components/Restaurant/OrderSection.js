import React, {useState} from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import OrderNow from './OrderNow'

const OrderSection = () => {

    const [orders, setOrders] = useState(true);

    return (
        <>
            {
                orders ?
                    (<div className='bg-Zomato-900 h-24 my-3 flex items-center justify-between cursor-pointer' onClick={() => setOrders((prev) => !prev)}>
                        <div className='flex items-center'>
                            <div className='w-12 h-12 mx-4'>
                                <img src='https://www.pinclipart.com/picdir/big/552-5524872_delivery-boy-vector-png-clipart.png' alt='' className='w-full h-full' />
                            </div>
                            <div className='text-xl'>Order Now</div>
                        </div>
                        <div className='w-6 h-6 mx-4'>
                            <BsFillArrowRightCircleFill className='w-full h-full' />
                        </div>
                    </div>) : <OrderNow />
            }
        </>
    )
}

export default OrderSection