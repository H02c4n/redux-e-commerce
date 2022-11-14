import React from 'react'
import CategoryNavbar from '../components/CategoryNavbar'
import Products from '../components/Products'
const Home = () => {

  return (
    <div className='row mt-3'>
      <CategoryNavbar/>
      <Products/>
    </div>
  )
}

export default Home