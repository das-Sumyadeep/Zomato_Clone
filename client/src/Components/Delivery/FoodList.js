import React, { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';
import { SmFoodCast } from '../Default/FoodCast';

const CastList = [

    {
        src: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
        name: 'Biryani'
    },
    {
        src: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
        name: 'Pizza'
    },
    {
        src: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
        name: 'Burger'
    },
    {
        src: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
        name: 'Thali'
    },
    {
        src: 'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png',
        name: 'Fried Rice'
    },
    {
        src: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
        name: 'Rolls'
    },
    {
        src: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg',
        name: 'North Indian'
    },
    {
        src: 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',
        name: 'Noodles'
    },
    {
        src: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
        name: 'Cake'
    },
    {
        src: 'https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png',
        name: 'Ice Cream'
    },
    {
        src: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png',
        name: 'Paneer'
    },
    {
        src: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
        name: 'Chicken'
    }
];


const FoodList = () => {

    const [Food, setFood] = useState(8);
    const [More, setMore] = useState(false);

    const handleSeeMore = () => {
        setFood(Food + Food / 2);
        setMore(true);
    }

    const handleSeeLess = () => {
        setFood(Food - Food / 3);
        setMore(false);
    }

    const slice = CastList.slice(0, Food);
    return (
        <>
            {
                slice.map((cast, index) => {
                    return (
                        <div key={index}>
                            <SmFoodCast {...cast} />
                        </div>
                    )
                })

            }
            <button className='border-2 w-full p-1 rounded-lg text-md text-gray-500 flex items-center justify-center gap-2' onClick={() => More ? handleSeeLess() : handleSeeMore()}>
                {More ? "see less" : "see more"}
                <span>{More ? <BiSolidChevronUp /> : <BiSolidChevronDown />}</span>
            </button>
        </>
    )
}


export default FoodList;