import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import PurchasesInfo from '../components/purchases/PurchasesInfo';
import './styles/purchases.css'

const Purchases = () => {

  const purchasesSlice = useSelector(store => store.purchasesSlice);
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(getPurchasesThunk());
  }, [])
  
//console.log(purchasesSlice);

  return (
    <div className='purchases'>
      <h2 className='purchases_title'>My Purchases</h2>      
      <div>
        <ul>
        {
          purchasesSlice?.map((purchase)=>(
           <PurchasesInfo
            key= {purchase.id}
            purchase = {purchase}
           />
            
          ))
        }
        </ul>
        
      </div>
    </div>
  )
}

export default Purchases;