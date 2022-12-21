import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MiniGame from '../pages/MiniGame';
import Register from '../pages/Register';
import Login from '../pages/Login';
const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/minigame' element={<MiniGame />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
export default Router;
