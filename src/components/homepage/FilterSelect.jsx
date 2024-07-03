import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/filterselect.css';

const FilterSelect = ({setCategoryValue}) => {

    const [categories, getCategories] = useFetch();

    useEffect(() => {
      getCategories('/categories');
    }, [])
    
    //console.log(categories);
    const itemSelect = useRef();

    const handleChange = () =>{
        setCategoryValue(itemSelect.current.value);
    }

  return (
    <div className='filterselect'>
      <select ref={itemSelect} onChange={handleChange}>
        <option value="">All products</option>
        {
            categories?.map((category)=>(
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))
        }
      </select>
    </div>
    
  )
}

export default FilterSelect;