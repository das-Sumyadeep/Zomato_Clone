import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SmRestaurantCard, MdRestaurantCard } from "../Default/RestaurantCard";

const DeliveryRestaurantList = () => {
  const { isLoading, allRestaurants, isError } = useSelector(
    (state) => state.restaurant
  );

  return (
    <>
      {isLoading && (
        <h1 className="font-medium text-2xl text-green-600 text-center">
          Loading...
        </h1>
      )}
      {
        isError && (
          <h1 className="font-medium text-2xl text-red-600 text-center">
            Restaurant Not found!
          </h1>)
      }

      <div className="hidden sm:flex xs:flex flex-wrap gap-5">
        {allRestaurants &&
          allRestaurants.map((item, index) => {
            return (
              item?.type === "Delivery" && (
                <NavLink
                  to={`/${item.type}/${item._id}/overview`}
                  key={index}
                >
                  <SmRestaurantCard
                    {...item}
                    src={item.images?.photos[0]}
                  />
                </NavLink>
              )
            );
          })}
      </div>
      <div className="hidden md:flex xm:flex lg:hidden flex-wrap justify-evenly gap-6">
        {allRestaurants &&
          allRestaurants.map((item, index) => {
            return (
              item?.type === "Delivery" && (
                <NavLink
                  to={`/${item.type}/${item._id}/overview`}
                  key={index}
                >
                  <MdRestaurantCard
                    {...item}
                    src={item.images?.photos[0]}
                  />
                </NavLink>
              )
            );
          })}
      </div>
      <div className="hidden lg:flex xl:flex flex-wrap justify-evenly gap-8">
        {allRestaurants &&
          allRestaurants.map((item, index) => {
            return (
              item?.type === "Delivery" && (
                <NavLink
                  to={`/${item.type}/${item._id}/overview`}
                  key={index}
                >
                  <MdRestaurantCard
                    {...item}
                    src={item.images?.photos[0]}
                  />
                </NavLink>
              )
            );
          })}

      </div>
    </>
  );
};

export default DeliveryRestaurantList;
