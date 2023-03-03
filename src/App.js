import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './component/Nav';
import Home from './routes/Home';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
