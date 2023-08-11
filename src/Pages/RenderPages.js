import React from 'react'


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from '../Components/Sidebar';
import AdminPanel from '../Components/Menu/AdminPanel';
import Billing from '../Components/Menu/Billing';
import Configuration from '../Components/Menu/Configuration';
import Landing from './Landing';
import Settings from '../Components/Menu/Settings';
import DisplayContent from '../Components/Configuration/DisplayContent';

function RenderPages() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/admin" element={<AdminPanel />}></Route>
          <Route path="/billing" element={<Billing />}></Route>
          <Route path="/configuration" element={<Configuration />}></Route>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/setting' element={<Settings />}></Route>
          <Route path='/display' element={<DisplayContent />}> </Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default RenderPages
