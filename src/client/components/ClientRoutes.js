import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const Test = () => {
  return "Test"
}

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='test'
        element={<Test />}
      />
    </Routes>
  );
};

export default ClientRoutes;
