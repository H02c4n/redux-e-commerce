import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProductList, getProducts } from '../features/productSlice';

const Products = () => {

    const {products, currentCategory} = useSelector((state) =>state.productReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getProducts());

      return () =>{
        dispatch(clearProductList());
      };
    },[]);
    

  return (
    <div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {currentCategory &&
          
          products?.filter(product => product.category === currentCategory
  ).map(product => {
            return(
              <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.rating?.count}</td>
              <td><img width="50px" src={product.image} alt="" /></td>
            </tr> 
            )
          })}
          {!currentCategory &&
          
          products?.map(product => {
            return(
              <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.rating?.count}</td>
              <td><img width="50px" src={product.image} alt="" /></td>
            </tr> 
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products