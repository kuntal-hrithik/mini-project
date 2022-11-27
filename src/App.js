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
import Login from './Components/Login';
import Footer from './Components/Footer';
function App() {
  return (
   <div className='App'>
    <Router> 
    <Header></Header>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="detail" element={<Detail></Detail>}></Route>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Router> 
    {/* <Footer></Footer> */}
   </div>
  );
}

export default App;
