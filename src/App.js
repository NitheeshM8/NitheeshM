import React from 'react';
import './App.css';
import Login  from './Project/Login';
import Aboutus from './Project/Aboutus';
import  Home from './Project/Home';
import Menu from './Project/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from './ReactAdd/Validation';
import Loginformref from './Form/Loginformref';
function App() {
  return (
    <div className="App">
    <Login/>
    
      <Router>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Home/Menu' element={<Menu/>}/>
      </Routes>
     </Router>
     <Greeting name={'suriya'} id={9}/>
     <Loginformref/>
    </div>
  );
}

export default App;
