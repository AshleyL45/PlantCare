import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import LandingPage from '../pages/B_body/LandingPage';
import AllProducts from '../pages/B_body/AllProducts';
import ProductDetails from '../pages/B_body/ProductDetails';
import Cart from '../pages/B_body/Cart';
import Admin from '../pages/B_body/Admin';
import LogIn from '../pages/B_body/LogIn';
import LayoutWithBar from "../layout/LayoutWithBar";

const AppRouter = () => {
    return (
        <LayoutWithBar>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/products' element={<AllProducts/>}/>
                    <Route path="/product-details/:id" element={<ProductDetails/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
        </LayoutWithBar>
    );
};

export default AppRouter;
