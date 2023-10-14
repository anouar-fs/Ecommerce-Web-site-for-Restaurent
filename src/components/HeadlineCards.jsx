import React from 'react';
import { Headlinefoods } from '../data/data.js';
import HeadlineCard from './HeadlineCard.jsx';
const HeadlineCards = () => {
return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {Headlinefoods.map((item,index)=>(
            <HeadlineCard name = {item.name}
            description = {item.description}
            image = {item.image}/>
        ))}
    </div>
);
};

export default HeadlineCards;