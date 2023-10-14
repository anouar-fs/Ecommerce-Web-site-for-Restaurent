import React, { useState } from 'react';
import { data } from '../data/data.js';
import Card from './Card.jsx'

const Food = (props) => {
  //   console.log(data);
  let [foods,setfoods] = useState(data)
  let [Myfoods,setMyfoods] = useState(data)
  let [filter,setfilter] = useState('All')
  let [filterPrice,setfilterPrice] = useState(undefined)

  
  let filtering = (catg)=>{
    var updatFoodList=[]
    if(catg==='All'){
      updatFoodList = filterPrice?foods.sort((a, b) => a.price - b.price):foods.sort((a, b) => b.price - a.price)
      setMyfoods(updatFoodList)
      setfilter(catg)
    }else{
      setfilter(catg)
      updatFoodList = foods.filter((item)=>item.category === catg)
      updatFoodList = filterPrice?updatFoodList.sort((a, b) => a.price - b.price):updatFoodList.sort((a, b) => b.price - a.price)
      setMyfoods(updatFoodList)
    }
  } 

  let change = (val)=>{
    setfilterPrice(val)
    setMyfoods(val?Myfoods.sort((a, b) => a.price - b.price):Myfoods.sort((a, b) => b.price - a.price))
  }
  
  let addtoFavorite = (index,event)=>{
      setMyfoods(Myfoods.map((item)=>(item.id===index)?(item.favorite?{...item,favorite : false}:{...item,favorite : true}):item))
      event.stopPropagation();
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
        
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={()=>filtering('All')}
              className={`m-1 ${filter === 'All' ? 'bg-orange-600 text-white border-2 border-orange-600' : 'bg-white text-orange-500 border-2 border-orange-500'}`}
              style={{ border: '1px solid black' }}
            >All</button>
            <button
              onClick={()=>filtering('burger')}
              className={(filter==='burger')?'m-1 bg-orange-600 text-white':'m-1 bg-white text-orange-500'}
              style={{ border: '1px solid black' }}
            >Burgers</button>
            <button
              onClick={()=>filtering('pizza')}
              className={(filter==='pizza')?'m-1 bg-orange-600 text-white':'m-1 bg-white text-orange-500'}
              style={{ border: '1px solid black' }}
            >Pizza</button>
            <button
              onClick={()=>filtering('salad')}
              className={(filter==='salad')?'m-1 bg-orange-600 text-white':'m-1 bg-white text-orange-500'}
              style={{ border: '1px solid black' }}
            >  Salads</button>
            <button
              onClick={()=>filtering('chicken')}
              className={(filter==='chicken')?'m-1 bg-orange-600 text-white':'m-1 bg-white text-orange-500'}
              style={{ border: '1px solid black' }}
            >Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=>change(false)}
              className={(!filterPrice && filterPrice!==undefined )?'m-1 bg-orange-600 text-white':'m-1 bg-white text-orange-500'}
              style={{ border: '1px solid black' }}
            >filter ascending</button>
            <button  onClick={()=>change(true)}
              className={(filterPrice && filterPrice!==undefined )?'m-1 bg-orange-600 text-white':'m-1 bg-white text-orange-500'}
              style={{ border: '1px solid black' }}
            >filter descending</button>
          </div>
        </div>
      </div>


      {/* Display foods */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
        {Myfoods.map((item, index) => (
          <Card addtoFavorite={addtoFavorite} showingdetail={props.showingdetail} id={item.id} index={index} image={item.image} name={item.name} price={item.price} favorite={item.favorite}></Card>
        ))}
      </div>

    </div>
  );
};

export default Food;