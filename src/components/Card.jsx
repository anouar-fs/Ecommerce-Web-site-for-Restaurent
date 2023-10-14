import React from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

const Card = (props) => {

return (
    
    <div className='cursor-pointer' onClick={()=>props.showingdetail(props.index)}>
        
        <div
            key={props.index}
            className='relative border shadow-lg rounded-lg hover:scale-105 duration-300'
        >
            {!props.favorite && <AiOutlineHeart onClick={(event)=>props.addtoFavorite(props.id,event)} className='text-pink-700 absolute top-2 right-2' size={30}/>}
            {props.favorite && <AiFillHeart onClick={(event)=>props.addtoFavorite(props.id,event)} className='text-pink-700 absolute top-2 right-2' size={30}/>}
            <img
                src={props.image}
                alt={props.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
                <p className='text-xs font-bold lg:text-base md:text-sm sm:text-sm'>{props.name}</p>
                <p>
                    <span className='text-xs sm:text-base lg:text-base bg-orange-500 text-white p-1 flex-nowrap rounded-full'>
                        {(props.price+' $')}
                        
                    </span>
                </p>
            </div>
        </div>
    </div>
)
}

export default Card