import React from 'react'
import {BsTrashFill} from 'react-icons/bs'; 

const CartTableElement = (props) => {
return (
    <tr class="bg-white">
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <img className='object-cover w-12 h-12' src={props.OrderedProduct.image} alt='dhshsqbh'/>
                        </td>
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                            {props.OrderedProduct.name}
                        </td>
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                ${props.OrderedProduct.price}
                        </td>
                        <td class="text-sm text-gray-700 h-20 flex items-center justify-center">
                        {props.OrderedProduct.quantite}
                        </td>
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">${(props.OrderedProduct.price)*(props.OrderedProduct.quantite)}</td>
                        <td class="text-sm text-gray-700 h-20 flex items-center justify-center">
                                <BsTrashFill onClick={()=>props.RemoveProcductFromCart(props.OrderedProduct)} className='text-blue-800 cursor-pointer hover:text-rose-700' size={20} />
                        </td>
    </tr>
)
}

export default CartTableElement