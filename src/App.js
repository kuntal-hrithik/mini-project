import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import  Header  from './Components/Header';
import styled from 'styled-components';
import Home from './Components/Home';
import Detail from './Components/Detail';
function App() {
  return (
   <div className='App'>
    <Router>
    <Header></Header>
    <Routes>
      <Route path="detail" element={<Detail></Detail>}>
      
      </Route>
      <Route path="/" element={<Home/>}/>
       
    </Routes>
    </Router>
   {/* <Header/>
   <Home></Home> */}
   </div>
  );
}

export default App;
