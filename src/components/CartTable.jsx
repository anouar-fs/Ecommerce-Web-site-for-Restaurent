import React from 'react'
import CartTableElement from './CartTableElement'
const CartTable = (props) => {
return (
//     <>
//     <div class="overflow-auto max-h-[70%] rounded-lg shadow hidden md:block">
//         <table class="w-full">
//         <thead class="bg-gray-50 border-b-2 border-gray-200">
//         <tr>
//             <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">Image</th>
//             <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
//             <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">price</th>
//             <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">quantite</th>
//             <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
//             <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left"></th>
//         </tr>
//     </thead>
//     <tbody class="divide-y divide-gray-100">
//         {props.OrderedProducts.map((item, index) => (
//         <CartTableElement OrderedProduct={item} RemoveProcductFromCart={props.RemoveProcductFromCart}/>
//         ))}
//     </tbody>
//     </table>
// </div>
//     <div class="mt-5 bg-white p-4 border-2 border-gray-200 rounded-lg">
//             <span className='font-bold'>Total : {props.Total}$</span>
//     </div>
//     </>


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


<>
    <div class="overflow-auto max-h-[70%] rounded-lg shadow md:block">
        <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">Image</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">price</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">quantite</th>
                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
                {props.OrderedProducts.map((item, index) => (
                    <CartTableElement OrderedProduct={item} RemoveProcductFromCart={props.RemoveProcductFromCart}/>
                ))}
            </tbody>
        </table>
    </div>
    <div class="mt-5 bg-white p-4 border-2 border-gray-200 rounded-lg">
        <span  className='font-bold'>Total : {props.Total}$</span>
    </div>
        <button className='mt-5 p-3 rounded-xl bg-black text-white text-sm hover:bg-zinc-700 mb-3  lg:mb-0 lg:text-base disabled:pointer-events-none disabled:opacity-50' 
        disabled={props.Total === 0}
        onClick={props.setingCheckout}
        >Check Out</button>
</>

)
}

export default CartTable