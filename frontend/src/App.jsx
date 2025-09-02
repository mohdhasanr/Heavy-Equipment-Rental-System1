import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import FoodCategory from './components/FoodCategory/FoodCategory';
import AboutUs from './components/AboutUs/AboutUs';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import FoodItemDetail from './components/FoodItemDetail/FoodItemDetail';

const App = () => {
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer/>
      {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/food-category/:categoryName" element={<FoodCategory />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/placeorder' element={<PlaceOrder />}/> {/* fixed */}
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/explore-menu' element={<ExploreMenu/>} />
          <Route path="/food-item/:id" element={<FoodItemDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
