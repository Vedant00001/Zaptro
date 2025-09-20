import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/products'element={<Products/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/cart'element={<Cart/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
