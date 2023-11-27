import React from 'react'
import { NavLink } from 'react-router-dom';

const FoodTab = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 600 : '',
            color: isActive ? 'black' : '',
            borderTop: isActive ? 'solid 3px red' : ''
        }
    }

    return (
        <>

            <div className='bg-white flex items-center justify-around w-full h-20 shadow-inner border-t-2 bottom-0 fixed z-10 text-gray-500 text-sm'>

                <NavLink style={navLinkStyle} to='/Delivery'>
                    <div className=' w-32 h-20 flex justify-center items-center'>
                        <div className='w-8 h-8 flex flex-col items-center gap-1'>
                            <img src='https://www.pngmart.com/files/10/Delivery-Boy-Vector-PNG.png' alt='DeliveryOut' className='w-full h-full' />
                            <h3>Delivery</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink style={navLinkStyle} to='/Dining'>
                    <div className=' w-32 h-20 flex justify-center items-center'>
                        <div className='w-8 h-8 flex flex-col items-center'>
                            <img src='https://i.pinimg.com/originals/b1/56/84/b156841e9bd6f6b88a0491d09fac1fa2.png' alt='MealOut' className='w-full h-full' />
                            <h3 >DiningOut</h3>
                        </div>
                    </div>
                </NavLink>
                <NavLink style={navLinkStyle} to='/Nightlife'>
                    <div className=' w-32 h-20 flex items-center justify-center'>
                    <div className='w-8 h-8 flex flex-col items-center'>
                        <img src='https://images.vexels.com/media/users/3/156510/isolated/preview/5b4201b73def34da3d6ad41414870d92-alcohol-bottle-flat-icon-by-vexels.png' alt='NightOut' className='w-full h-full' />
                        <h3 >Nightlife</h3>
                    </div>
                    </div>
                </NavLink>
            </div >

        </>
    )
}


export default FoodTab;