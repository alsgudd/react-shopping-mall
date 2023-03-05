import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './component/Menubar';
import Home from './routes/Home';
import All from './routes/All';
import Detail from './routes/Detail';

function App() {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/all' element={<All />} />
        <Route path='/product/:id' element={<Detail />}/>
      </Routes>
    </>
  );
}

export default App;
