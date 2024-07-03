import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import ProdCard from '../homepage/ProdCard'
import './styles/prodsimilar.css';
const ProdSimilar = ({product}) => {
 // console.log(product);

  const [items, getItems] = useFetch();

  const path = `/products?categoryId=${product.categoryId}`

  useEffect(() => {
   getItems(path);
  }, [])
   console.log(items);


   const cbFilter = (prod) =>{
    return prod.id !== product.id;
   }


  return (
    <div className='prodsimilar'>
      <h2 className='prodsimilar_title'>Discover similar items</h2>
      <div className='homepage_container'>
        {
          items?.filter(cbFilter).map((prod)=>(
            <ProdCard
            key={prod.id}
            prod= {prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProdSimilar;