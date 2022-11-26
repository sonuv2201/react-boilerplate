import React from 'react';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}  />
        <Route path="/login" element={<Login />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default Router