import React from 'react';
import './styles/prodcard.css';
import { Link, useNavigate } from 'react-router-dom';
import { postProductsThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const ProdCard = ({prod}) => {
    //console.log(prod);

    const navigate = useNavigate();

    const dispatch = useDispatch();

       const handleDetail = () =>{
        navigate(`/product/${prod.id}`);
    }

    const handleAddCart = () =>{
       dispatch(postProductsThunk(
            {
                "quantity": 1,
                "productId": prod.id,
            }));
    }
    
  return (
    <article className='prodcard'>      
      <figure onClick={handleDetail} className='prodcard_img'>            
          <img src={prod?.images[0].url} alt="product_img"/>
          <img src={prod?.images[1].url} alt="product_img"/>
      </figure>
      <hr className='prodcard_div' />
      <ul className='prodcard_list'>
          <li className='prodcard_item'><span>{prod.brand}</span><span>{prod.title}</span></li>
          <li className='prodcard_item'><span>Price</span><span>$ {prod.price}</span></li>
      </ul >        
      <div className='prodcard_buttons' >
          <button onClick={handleDetail}>Detail</button>
          <button onClick={handleAddCart}>
            <img src="../../..//assets/cart2.svg" alt="" />
          </button>
      </div>
        
    </article>
  )
}

export default ProdCard;