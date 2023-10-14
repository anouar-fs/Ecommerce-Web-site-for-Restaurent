import React from 'react'

const HeadlineCard = (props) => {
return (
    <div className='rounded-xl relative'>
    {/* Overlay */}
    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>{props.name}</p>
        <p className='px-2'>{props.description}</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
    </div>
    <img
    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src={props.image}
        alt='/'
    />
    </div>
)
}

export default HeadlineCard