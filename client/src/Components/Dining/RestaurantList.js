import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SmRestaurantCard, MdRestaurantCard } from '../Default/RestaurantCard';

const DiningRestaurantList = () => {

    const { isLoading, allRestaurants, isError } = useSelector((state) => state.restaurant);

    return (
        <>

            {
                isLoading && (

                    <h1 className='font-medium text-2xl text-green-600 text-center'>Loading...</h1>

                )
            }{
                isError && (
                  <h1 className='font-medium text-2xl text-red-500 text-center'>Restaurant Not Found !</h1>
                )
              }

            <div className='md:hidden xm:hidden lg:hidden xl:hidden flex flex-wrap gap-5'>

                {

                    allRestaurants.map((rest, index) => {
                        return (
                            rest.type === 'Dining' && 
                            (<NavLink to={`/${rest.type}/${rest._id}/overview`} key={index}>
                                <SmRestaurantCard {...rest} src={rest.images.photos[0]}/>
                            </NavLink>)
                        )
                    })

                }
            </div>


            <div className='hidden md:flex xm:flex lg:hidden flex-wrap justify-evenly'>

                {
                    allRestaurants.map((rest, index) => {
                        return (
                            rest.type === 'Dining' && 
                            (<NavLink to={`/${rest.type}/${rest._id}/overview`} key={index}>
                                <MdRestaurantCard {...rest} src={rest.images.photos[0]}/>
                            </NavLink>)
                        )
                    })

                }
            </div>

            <div className='hidden lg:flex xl:flex flex-wrap justify-evenly gap-8'>

                {
                    allRestaurants.map((rest, index) => {
                        return (
                            rest.type === 'Dining' && 
                            (<NavLink to={`/${rest.type}/${rest._id}/overview`} key={index}>
                                <MdRestaurantCard {...rest} src={rest.images.photos[0]}/>
                            </NavLink>)
                        )
                    })

                }
            </div>

        </>
    )
}

export default DiningRestaurantList;