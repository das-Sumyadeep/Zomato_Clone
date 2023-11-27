import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { MdFoodCast } from '../Default/FoodCast';

let slidesToShow = 5;
const PreviousBtn = (props) => {

    // console.log(props);
    const { onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 &&
                (<div onClick={onClick}>
                    <FaCircleChevronLeft style={{ color: '#e23744', fontSize: '30px', zIndex: '1', position: 'absolute', top: '31%', left: '-4%' }} />
                </div>)
            }
        </>
    )
}

const NextBtn = (props) => {

    const { onClick, currentSlide, slideCount } = props;
    return (
        <>
            {currentSlide !== slideCount - slidesToShow &&
                (<div onClick={onClick}>
                    <FaCircleChevronRight style={{ color: '#e23744', fontSize: '30px', zIndex: '1', position: 'absolute', top: '31%', left: '100%' }} />
                </div>)
            }
        </>
    )

}

const settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
        {

            breakpoint: 1023,
            settings: {

                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {

            breakpoint: 1535,
            settings: {

                slidesToShow: 5,
                slidesToScroll: 1
            }
        }

    ]
};


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

const FoodCarousal = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {

        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    if (width <= 1023) {
        slidesToShow = 4;
    } else if (width > 1023 && width <= 1535) {
        slidesToShow = 5;
    }

    return (
        <>
            <Slider {...settings} >
                {
                    CastList.map((food, index) => {
                        return (
                            <div key={index}>
                                <MdFoodCast {...food} />
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default FoodCarousal;