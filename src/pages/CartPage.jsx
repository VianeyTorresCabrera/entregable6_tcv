import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProdsThunk, setCart } from '../store/slices/cart.slice';
import ItemCart from '../components/cartpage/ItemCart'
import './styles/cartpage.css';
import { postPurchasesThunk } from '../store/slices/purchases.slice';

const CartPage = () => {

  const cart = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProdsThunk());
  },[])

  const products = cart.reduce((cv, prod, ) => cv += prod.quantity, 0);
  
  const total = cart.reduce(
    (cv, prod)=> cv += prod.quantity * prod.product.price, 0
    );
  //console.log(cart);
  console.log(products);
  console.log(total);

  const handleBuy = () =>{
    dispatch(postPurchasesThunk());
    dispatch(setCart([]));//vaciamos el carrito de cartslice
  }


  return (
    <div className='cartpage'>
      <div className='cartpage_container'>
        {        
          cart?.map(prod => (          
            <ItemCart
              key = {prod.id}
              prod = {prod}
            />
          ))
        }
      </div>
      <div className='cartpage_totals'>
        <ul className='cartpage_list'>
          <li className='cartpage_item'><span>Products</span><span>{products}</span></li>
          <li className='cartpage_item'><span>Total:</span><span>{total}</span></li>
        </ul>
        <button onClick={handleBuy} className='carpage_btn'>Buy all products</button>
      </div>
    </div>    
  )
}

export default CartPage;