import React, { useState } from 'react'

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food';
import Category from './components/category';
import { data } from './data/data';
import ProductPage from './components/ProductPage'
import Payment from './components/Payment'



function App() {
  let [showDetail,setshowDetail] = useState(false);
  let [Product,setProduct] = useState();
  let [OrderedProducts,setOrderedProducts] = useState([]);
  let [nofications,setnofications] = useState(0);
  let [Total,setTotal] = useState(0);




  let showingdetail =(index)=>{
    setshowDetail(showDetail?false:true)
    setProduct(data[index])
  }
  let AddProducttocart=(product,amount,loading)=>{
    setOrderedProducts([...OrderedProducts,{...product,quantite:amount,key:(OrderedProducts.length+1)}])
    loading();
    setnofications(OrderedProducts.length+1)
    setTotal(OrderedProducts.reduce((accumulator, currentElement) => accumulator + (currentElement.price * currentElement.quantite), 0)+(product.price*amount))
  }
  let RemoveProcductFromCart=(OrderedProduct)=>{
    const newArray = OrderedProducts.filter(item => item.key !== OrderedProduct.key);
    setOrderedProducts(newArray);
    setnofications(OrderedProducts.length-1)
    setTotal(newArray.reduce((accumulator, currentElement) => accumulator + (currentElement.price * currentElement.quantite), 0))

  }
  return (
    <div>
      
      <NavBar OrderedProducts={OrderedProducts} nofications={nofications}
        RemoveProcductFromCart={RemoveProcductFromCart} Total={Total}/>
      {!showDetail && 
        <>
        <Hero/>
        <HeadlineCards/>
        <Food showingdetail={showingdetail}/>
        </>}
      {showDetail && <ProductPage AddProducttocart={AddProducttocart}  showingdetail={showingdetail} Product={Product}/>}
      <Category/>
    </div>
  );
}

export default App;
