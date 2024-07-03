import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/filterprice.css';

const FilterPrice = ({setInputPrice}) => {

   const{ handleSubmit, register} = useForm();

   const submit = (data) =>{
        console.log(data);
        setInputPrice({
            min: data.min,            
            max:data.max || Infinity,
        });
   }


  return (
    <div className='filterprice'>
        <form className='filterprice_form' onSubmit={handleSubmit(submit)}>
            <h3>Price</h3>
            <div>
                <label htmlFor="min">Min</label>
                <input {...register('min')} id='min' type="text" />
            </div>
            <div>
                <label htmlFor="max">Max</label>
                <input {...register('max')} id='max' type="text" />
            </div>
            <button>Filter Price</button>
        </form>    
    </div>
    
  )
}

export default FilterPrice;