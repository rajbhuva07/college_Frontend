import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
// import Contact from './page/Contact';
import Login from './page/Login';
import Newproduct from './page/Newproduct';
import Signup from './page/Signup';

import { Provider } from 'react-redux';
// import { store } from 'redux'
import { store } from './redux/index';
import Cart from './page/Cart';
import Success from './page/Success';
import Cancel from './page/Cancel';
import BillingPage from './page/Bill';
import Aboutus from './page/Aboutus';
import Conatct from './page/Conatct';
import ForgotPassword from './page/ForgotPassword';
import ResetPassword from './page/ResetPassword';
// import RootRoutes from './component/admin/RootRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='menu/:filterby' element={<Menu />} />
      <Route path='about' element={<Aboutus />} />
      <Route path='contact' element={<Conatct />} />
      <Route path='login' element={<Login />} />
      <Route path='reset-password/:token' element={<ResetPassword />} />
      <Route path='login/forgot-password' element={<ForgotPassword />} />
      <Route path='newproduct' element={<Newproduct />} />
      <Route path='signup' element={<Signup />} />
      <Route path='cart' element={<Cart />} />
      <Route path='billing' element={<BillingPage />} />
      <Route path='success' element={<Success />} />
      <Route path='cancel' element={<Cancel />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
