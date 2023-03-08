import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './component/Menubar';
import Home from './routes/Home';
import All from './routes/All';
import Detail from './routes/Detail';
import Sidebar from './component/Sidebar';
import Top from './routes/Top';
import Bottom from './routes/Bottom';
import Acc from './routes/Acc';
import Cart from './routes/Cart';

function App() {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tab' element={<Sidebar />}>
          <Route path='all' element={<All />} />
          <Route path='top' element={<Top />} />
          <Route path='bottom' element={<Bottom />} />
          <Route path='acc' element={<Acc />} />
        </Route>
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/about' element={<div style={{textAlign: "center"}}>이 페이지는 Portfolio를 위해 React로 제작된 페이지입니다.</div>}/>
      </Routes>
    </>
  );
}

export default App;
