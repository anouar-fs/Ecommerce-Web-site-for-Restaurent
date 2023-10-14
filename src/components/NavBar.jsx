import React, { useState } from 'react'
import {AiFillWallet,AiOutlineClose, AiOutlineMenu,AiOutlineSearch,AiFillHeart} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import { BiSolidHelpCircle } from 'react-icons/bi';
import MenuButton from './MenuButton'
import CartTable from './CartTable';
import Checkout from './Checkout';


const NavBar = (props) => {
    let [showSideMenu,setshowSideMenu] = useState(false);
    let [showCart,setshowCart] = useState(false);
    let [checkout,setCheckout] = useState(false);

    let showingsideMenu = ()=>{
        showSideMenu?setshowSideMenu(false):setshowSideMenu(true);
    }
    let showingcart = ()=>{
        showCart?setshowCart(false):setshowCart(true);
    }
    let setingCheckout = ()=>{
        console.log("Executed here")
        checkout?setCheckout(false):setCheckout(true);
    }

    return (
        
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div className='cursor-pointer' >
                    <AiOutlineMenu onClick={showingsideMenu} size={30}/>
                </div>
                <h1 className='text-xl sm:text-3xl lg:text-4xl px-2'>
                    Best <span className='font-bold'>Food</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-slate-400 rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* Search Bar  */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'> 
                <AiOutlineSearch size={25} />
                <input className='p-2 bg-transparent w-full focus:outline-none' type="text" placeholder='Search the Item ...'/>
            </div>

            {/* Cart Icon button  */}
            <div className='relative'>
                {!(props.nofications===0) && <div className='absolute left-1 -top-3 h-6 w-6 rounded-full bg-sky-500'><span className='flex justify-center font-bold text-white'>{props.nofications}</span></div>}
                <button onClick={()=>showingcart()} className='bg-black text-white flex items-center py-2 ml-4 px-1 rounded-full w-20 hover:bg-zinc-700'>
                    <BsFillCartFill  size={20} className='mr-2'/>
                    Cart
                </button>
            </div>



            {/* Black Overlay  */}
            {showSideMenu && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}

            {/* Sider Menu  */}
            <div className={`fixed top-0 ${showSideMenu? 'left-0' : 'right-full'} w-[300px] h-screen bg-white z-10 duration-300`}>
                <AiOutlineClose onClick={showingsideMenu} size={30} className='absolute top-4 right-4 cursor-pointer'/>
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold'>Food</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <MenuButton icon={<AiFillHeart size={25} className='mr-4' />}> Favorites</MenuButton>
                        <MenuButton icon={<BiSolidHelpCircle size={25} className='mr-4' />}> Help</MenuButton>
                        <MenuButton icon={<AiFillWallet size={25} className='mr-4' />}> Wallet</MenuButton>
                    </ul>
                </nav>
            </div>























            {/* Cart ELEMENT */}
            <div className={`fixed top-0 ${showCart ? 'right-0' : 'left-full'} w-[100%] sm:w-[50%] md:w-[50%] lg:w-[50%]  h-screen bg-slate-100 z-10 duration-300 shadow-2xl`}>
                <AiOutlineClose onClick={showingcart} size={30} className='absolute top-4 right-4 cursor-pointer'/>
                <h2 className='text-2xl p-4 flex'>
                    <span className='font-bold'>Your Cart</span> <BsFillCartFill size={25}/>
                </h2>
            
                <div className="p-5 h-screen bg-slate-100">
                      <h1 className="text-xl mb-2">Your orders</h1>
                      <div className={`transition-transform ${checkout ? 'slide-in show' : 'slide-in'}`}>
                        {!checkout && (
                          <CartTable
                            OrderedProducts={props.OrderedProducts}
                            RemoveProcductFromCart={props.RemoveProcductFromCart}
                            Total={props.Total}
                            setingCheckout={setingCheckout}
                          />
                        )}
                        {checkout && <Checkout setingCheckout={setingCheckout}/>}
                    </div>
                    </div>
            </div>
            
            
        </div>
        
            
    )
}

export default NavBar