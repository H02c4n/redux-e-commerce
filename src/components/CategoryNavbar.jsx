import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, setCurrentCategory } from '../features/productSlice';

const CategoryNavbar = () => {

    const dispatch = useDispatch();
    const {categories} = useSelector((state)=>state.productReducer);


    useEffect(() =>{
        dispatch(getCategories());
    },[])


    const handleClick = (category) =>{
        dispatch(setCurrentCategory(category));
    }

  return (
    <div className='d-flex justify-content-center mt-2'>
        <ul className="list-group list-group-horizontal">
            {categories?.map(category =>{
                return(
                    <li onClick={() => handleClick(category)} role="button" key={category} className="list-group-item">{category}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default CategoryNavbar