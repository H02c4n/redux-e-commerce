import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from '../pages/Details'
import Home from '../pages/Home'
import About from "../pages/About"
import Login from "../pages/login/Login"
import Header from '../components/Header'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter