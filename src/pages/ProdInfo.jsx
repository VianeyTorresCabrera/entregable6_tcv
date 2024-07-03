import React, { useEffect, useState } from 'react';
import ProdDetails from '../components/prodInfo/ProdDetails';
import ProdSlider from '../components/prodInfo/ProdSlider';
import ProdSimilar from '../components/prodInfo/ProdSimilar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import './styles/prodinfo.css';

const ProdInfo = () => {

  const {id} = useParams();//desestructurarmos el id del prod

  const dispatch = useDispatch();
  //console.log(id);

//llamamos products de products.slice, se guardan todos los productos
const products = useSelector(store => store.products);

// se filtra el producto del id que desestructuramos
//desestruturamos product para que sea un objeto


//console.log(product);

//peticion para volver a filtrar los productos
useEffect(() => {
  dispatch(getProductsThunk());
}, []);


const product = products?.filter(prod => prod.id === +id)[0]; 

  return (
    <section className='prodinfo'>     
      <ProdSlider
      product ={product}
      />   
       <ProdDetails
      product ={product}
      />   
      
      <ProdSimilar
      product ={product}
      />     
    </section>
  )
}

export default ProdInfo;