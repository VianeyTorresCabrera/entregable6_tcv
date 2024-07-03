import React from 'react';
import { Link } from "react-router-dom";
import './styles/navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
      
        <h1 className='navbar_title'><Link className='e' to={'/'}>e-comerce</Link> </h1>       
        <ul className='navbar_list'> 
          <li className='navbar_item'><Link to='/login'><img  className='navbar_img' src="..//assets/user.svg" alt="user_img" /></Link></li>                     
          <li className='navbar_item'><Link to='/purchases'><img  className='navbar_img' src="..//assets/purchases2.svg" alt="purchases_img" /></Link></li>                     
          <li className='navbar_item'><Link to='/cart'><img className='navbar_img' src="..//assets/cart.svg" alt="cart_img" /></Link></li>                     
        </ul>
    </div>
  )
}

export default Navbar;