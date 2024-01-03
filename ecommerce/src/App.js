import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutUs from './routes/about-us/about-us.component';
import Categories from './routes/categories/categories.component';
import Contact from './routes/contact/contact.component';
import Current from './routes/current/current.component';
import Home from './routes/home/home.component';
import Products from './routes/products/products.component';
import ShoppingCart from './routes/shopping-cart/shopping-cart.component';
import SignIn from './routes/sign-in/sign-in.component';
import { ShoppingCartProvider } from './contexts/shopping-cart.context';
import Header from './components/header/header.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  
    return (
      <ShoppingCartProvider>
        <Header />
        <SearchBox />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-us' element={<AboutUs/>} />
          <Route path='categories' element={<Categories/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='current' element={<Current/>} />
          <Route path='products' element={<Products/>} />
          <Route path='shopping-cart' element={<ShoppingCart/>} />
          <Route path='signin' element={<SignIn/>} />
        </Routes>
      </ShoppingCartProvider>
    );
  };

export default App;
