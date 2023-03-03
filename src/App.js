import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './component/Menubar';
import Home from './routes/Home';

function App() {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
