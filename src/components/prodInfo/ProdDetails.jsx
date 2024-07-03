import React, { useState } from 'react';
import './styles/proddetails.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {postProductsThunk, updateProductThunk} from '../../store/slices/cart.slice';

const ProdDetails = ({product}) => {

 /*const[quantity, setQuantity] = useState(1);*/

 const dispatch = useDispatch();


 const navigate = useNavigate();

 const handleLess = () =>{
  if (product.quantity > 1) {
      dispatch( updateProductThunk(product.id, {
          "quantity": product.quantity - 1,
      }));  
  }        
}

const handlePlus = () => {
 dispatch( updateProductThunk(product.id, {
  "quantity": product.quantity + 1,
}));
}

 const handleBuy = () =>{
  dispatch(postProductsThunk());
  dispatch(setCart([]));//vaciamos el carrito de cartslice
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
              <div className='quantity'>{product?.quantity}</div>
              <button onClick={handlePlus}> + </button>      
          </div>
        </div>
      </div>
      <div className='proddetails_btn_cart'>
        <button onClick={handleBuy} className='proddetails_addcart'>Add to cart
          <img src="../..//assets/cart2.svg" alt="details_car_img" />
        </button>
      </div>
      
    </div>

  )
}

export default ProdDetails;