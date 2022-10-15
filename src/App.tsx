import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './screens/Home'
import About from './screens/About'
import Users from './screens/Users'
import Nav from './screens/Nav'

import { Routes, Route } from "react-router-dom";

interface pageName {
  name: string;
}

function App() {   

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
