import React from 'react'
import { NavLink } from 'react-router-dom'

const SubNav = (props) => {

    const {type, id} = props;
    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#e23744' : '',
            borderBottom: isActive ? 'solid 3px red' : ''
        }
    }

    return (
        <>
            <div className='flex items-center justify-start my-5 border-b-2 w-full '>
                <ul className='flex items-center justify-evenly space-x-28 text-xl text-gray-500 cursor-pointer'>
                    <NavLink style={navLinkStyle} to={`/${type}/${id}/overview`}>
                        <li className='p-3' >Overview</li>
                    </NavLink>
                    <NavLink style={navLinkStyle} to={`/${type}/${id}/order`}>
                        <li className='p-3' >Order</li>
                    </NavLink>
                    <NavLink style={navLinkStyle} to={`/${type}/${id}/reviews`}>
                        <li className='p-3' >Reviews</li>
                    </NavLink>
                    <NavLink style={navLinkStyle} to={`/${type}/${id}/photos`}>
                        <li className='p-3' >Photos</li>
                    </NavLink>
                    <NavLink style={navLinkStyle} to={`/${type}/${id}/menu`}>
                        <li className='p-3' >Menu</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default SubNav