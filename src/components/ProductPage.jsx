import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill} from'react-icons/bs';
import { Orbit } from '@uiball/loaders'

const ProductPage = (props) => {


    const [images, setImages] = useState({
        img1 : props.Product.image,
        img2 : props.Product.image,
        img3 : props.Product.image,
        img4 : props.Product.image
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    const [Loading , setLoading] = useState(false);

    let loading=()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }

    return (
        <div className='mt-10 mb-20 mr-5 ml-5'>
            <div className='h-[10%] w-full flex justify-end'>
                <button className='rounded-xl bg-black text-white text-sm hover:bg-zinc-700 mb-3  lg:mb-0 lg:text-base' onClick={props.showingdetail}><BsFillArrowLeftCircleFill/> Go back</button>
        </div>
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-16 h-16  sm:w-18 sm:h-18 md:w-26 md:h-26 lg:w-24 lg:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-16 h-16  sm:w-18 sm:h-18 md:w-26 md:h-26 lg:w-24 lg:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-16 h-16  sm:w-18 sm:h-18 md:w-26 md:h-26 lg:w-24 lg:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-16 h-16  sm:w-18 sm:h-18 md:w-26 md:h-26 lg:w-24 lg:h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            
            <div className='flex flex-col gap-4 lg:w-2/4'>
                    
                <div>
                    <span className=' text-violet-600 font-semibold'>{props.Product.category}</span>
                    <h1 className='text-3xl font-bold'>{props.Product.name}</h1>
                </div>
                <p className='text-gray-700'>
                {props.Product.description}
                </p>
                <h6 className='text-2xl font-semibold'>$ {props.Product.price}</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => (prev===1)?(prev):(prev - 1))}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button onClick={()=>props.AddProducttocart(props.Product,amount,loading)} className='text-xs sm:text-sm md:text-base lg:text-lg bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full flex items-center justify-center hover:bg-violet-700'>
                            {Loading && <Orbit size={20} color="#FFFFFF" />}
                            Add To Cart
                        
                    </button>
                    
                </div>
            </div>
        </div>

        </div>
    )
}

export default ProductPage