import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Foods from './Foods'

const OrderNow = () => {

    const [items, setItems] = useState([]);
    const [clicked, setClicked] = useState(false);

    const { singleMenu, isLoading, isError } = useSelector((state) => state.order);
    const { menu } = singleMenu;

    const handleItem = (id) => {

        let newItems = menu.filter((item, index) => {
            return index === id ? item : null;
        })

        setItems(newItems);
        setClicked(true);
    }

    return (
        <>
            {
                isLoading && (

                    <h1 className='font-medium text-2xl text-green-600 text-center'>Loading...</h1>

                )
            }
            {
                isError && (

                    <h1 className='font-medium text-2xl text-red-600 text-center'>No Orders Found!</h1>

                )
            }
            <div className='lg:hidden xl:hidden'>
                {
                    menu && menu.map((item, index) => {

                        return (
                            <>
                                <div className='border-b-2 p-3 my-3 shadow-md sticky flex items-center justify-between cursor-pointer'
                                    key={index}>

                                    <h2 className='text-xl font-medium px-3'>{item.category}</h2>

                                </div>
                                <div className='mx-3 py-3 overflow-y-auto flex flex-col gap-4'>
                                    <Foods item={item.items} />
                                </div>

                            </>
                        )
                    })
                }

            </div>

            <div className='hidden lg:block xl:block'>
                <div className='flex items-start justify-evenly'>

                    <div className='w-1/4 cursor-pointer'>
                        {
                            menu && menu.map((item, index) => {
                                return (

                                    <div className=' py-3 px-2 mx-2 border-b-2 hover:text-red-500 '
                                        key={index}
                                        onClick={() => handleItem(index)}>
                                        <h2 className='text-xl font-medium px-3'>{item.category} {`(${item.items.length})`}</h2>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {
                        clicked === false &&
                        (<div className='w-full border-l-2'>
                            <div className='mx-3 overflow-y-auto h-80 mb-5'
                            >
                                {
                                    menu && menu.map((item, index) => {
                                        return (

                                            <div className='flex flex-col gap-4 items-start'>
                                                <div className='mt-4 cursor-pointer w-11/12'>
                                                    <h2 className='text-xl font-medium px-3'>{item.category} {`(${item.items.length})`}</h2>
                                                </div>
                                                <Foods item={item.items} category={items} />

                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>)
                    }

                    {
                        clicked &&
                        (<div className='w-full border-l-2'>
                            {
                                items.map((item, index) => {

                                    return (
                                        <div key={index}>
                                            <div className='mx-3 py-3 overflow-y-auto h-80 flex flex-col gap-4 border-b-2 mb-5'
                                            >
                                                <div className='cursor-pointer w-11/12' >
                                                    <h2 className='text-xl font-medium px-3'>{item.category} {`(${item.items.length})`}</h2>
                                                </div>
                                                <Foods item={item.items} />

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>)
                    }

                </div>
            </div >
        </>
    )
}
export default OrderNow