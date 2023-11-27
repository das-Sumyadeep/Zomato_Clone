import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { MdBrandcast } from '../Default/BrandCast';

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


const Brands = [

    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432700.png?output-format=webp',
        name: 'KFC'
    },
    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/1b9260f5570e4ba9b5329d8ebd24f2cf_1617919965.png?output-format=webp',
        name: 'Fat Belly'
    },
    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/ed98726fbff199f8920f8dce2926a32a_1648739641.png?output-format=webp',
        name: 'Burger King'
    },
    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521807074.png?output-format=webp',
        name: "Domino's Pizza"
    },
    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/5f18f1f17010acbc93bca92e577577b0_1611309220.png?output-format=webp',
        name: "JB's"
    },

    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/6915625b4bb14b66c7d766aa6c412932_1617919906.png?output-format=webp',
        name: 'Mast Biryani'
    },
    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp',
        name: 'Pizza Hut'
    },

    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/b5a6a71ee75fcaa771f63d2cdbb25eca_1683099039.png?output-format=webp',
        name: 'Baskin Robbins'
    },
    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/75b1ed08501895e21e282ece27a87f5c_1611309409.png?output-format=webp',
        name: 'Govindam Sweets'
    },

    {
        src: 'https://b.zmtcdn.com/data/brand_creatives/logos/6e6071113ba6574e35d2beab4bbde88a_1505799124.png?output-format=webp',
        name: 'Rolls Mania'
    },
];

const BrandCarousal = () => {

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
                    Brands.map((rest, index) => {
                        return (
                            <div key={index}>
                                <MdBrandcast {...rest} />
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default BrandCarousal;