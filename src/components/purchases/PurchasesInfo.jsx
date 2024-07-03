import React from 'react'
import './styles/purchasesinfo.css';
import { Link, useNavigate } from 'react-router-dom';

const PurchasesInfo = ({purchase}) => {

    console.log(purchase);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options);

   const navigate = useNavigate();

  return (
    <article className='purchasesi'>
        <Link className='purchasesinfo' to ={`/product/${purchase.product?.id}`}>
        <figure className='purchasesinfo_img'>
            <img src={purchase.product?.images[0].url} alt="purchase_img" />
        </figure> 
        
            <span>{date}</span>       
            <span>{purchase.product?.title}</span>
            <div className='purchasesinfo_quant'>
                <div className='purchasesinfo_q_box'>{purchase.quantity}</div>
            </div>
            
            <span>$ {purchase.product?.price}</span>
            </Link>
    </article>
  )
}

export default PurchasesInfo;