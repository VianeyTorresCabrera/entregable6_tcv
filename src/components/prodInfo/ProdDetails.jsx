import React, { useState } from 'react';
import './styles/proddetails.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postProductsThunk, updateProductThunk} from '../../store/slices/cart.slice';

const ProdDetails = ({product}) => {

 const[count, setCount] = useState(1);

 const dispatch = useDispatch();


 const handleLess = () =>{
  if(count >1){
  setCount(count-1)
  }
   
}

const handlePlus = () => {
  setCount(count+1); 
}

const handleAddCart = () =>{
 dispatch(postProductsThunk({
  "quantity": count,
  "productId": product.id,
 }));
}


  console.log(product);

  return (
    <div className='proddetails'>
      <div>
      <h2 className='porddetails_title'>{product.title}</h2>
      <p className='proddetails_descrip'>{product.description}</p>
      </div>
      <div className='proddetails_car'>
        <div>
          <span>Price</span><span>$ {product.price}</span>
        </div>
        <div className='proddetails_quantity'>
          <div className='proddetails_quantity_title'></div>
          <div className='proddetails_quantity_box'>
              <button onClick={handleLess} > - </button>
              <div className='quantity'>{count}</div>
              <button onClick={handlePlus}> + </button>      
          </div>
        </div>
      </div>
      <div className='proddetails_btn_cart'>
        <button onClick={handleAddCart} className='proddetails_addcart'>Add to cart
          <img src="../..//assets/cart2.svg" alt="details_car_img" />
        </button>
      </div>
      
    </div>

  )
}

export default ProdDetails;