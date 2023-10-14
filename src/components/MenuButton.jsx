import React from 'react'

const MenuButton = (props) => {
return (
    <li className='text-xl px-2 py-4 flex cursor-pointer hover:bg-gray-200'>
        {props.icon}
        {props.children}
    </li>
)
}

export default MenuButton