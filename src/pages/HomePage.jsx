import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import './styles/homepage.css';
import ProdCard from '../components/homepage/ProdCard';
import FilterPrice from '../components/homepage/FilterPrice';
import FilterSelect from '../components/homepage/FilterSelect';
const body = document.querySelector('body');

const HomePage = () => {
    const [categoryValue, setCategoryValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [inputPrice, setInputPrice] = useState({
        min: 0,
        max: Infinity,
    });
    const [menu, setMenu] = useState(false);

    const products = useSelector((store) =>store.products);
    const dispatch = useDispatch();

    //console.log(inputPrice);
    //console.log(categoryValue);

    useEffect(() => {    
      dispatch(getProductsThunk());
    }, []);

    const textInput = useRef();

    const handleChange = () =>{
        setInputValue(textInput.current.value.trim().toLowerCase())
    }

    const cbFilter = (prod) =>{
        const name = prod.title.toLowerCase().includes(inputValue);
        const price = +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;
        const category =categoryValue === '' ? true : prod.categoryId === +categoryValue;
        return name && price && category;
    }

    const handleMenu = () =>{
        setMenu(!menu);
    }

    const handleMode = () =>{
        body.classList.toggle('dark');
    }
    
    return (    
    <div className='homepage'>            
        <div className={`homepage_filters ${menu && 'active'}`}>
           <button onClick={handleMenu}> X </button>
               <FilterPrice
                   setInputPrice = {setInputPrice}
                />
                <FilterSelect
                        setCategoryValue = {setCategoryValue}
               /> 
               <button onClick={handleMode}>Change mode</button>              
       </div>                  
    
        <div className='homepage_search'>
            <input className='homepage_search_input' ref={textInput} onChange={handleChange}  type="text" />
            <button><img src="../../..//assets/search.svg" alt="" /></button>            
        </div>
        <button className={menu && 'active'} onClick={handleMenu}>            
            <img src="../../..//assets/filter2.svg" alt="" />
            </button>
        <div className='homepage_container'>
           {
               products?.filter(cbFilter).map((prod)=>(
                 <ProdCard
                    key = {prod.id}
                    prod = {prod}
                   />
               ))
              }
        </div>           
    </div>
  )
}

export default HomePage;