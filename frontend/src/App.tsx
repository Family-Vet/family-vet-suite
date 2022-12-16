import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
function App() {
  return (
    <div className="Login">
      <div className="LoginBox">
        <div className="LoginHeader">Family Vet Clinic And Supplies</div>
        <div className="inputs">
          <input className="name" placeholder="Enter your name:"/>
          <input 
          className="password" 
          placeholder="Enter your password:"
          type="password"
          />
        </div>
        <div style={{display: "flex",justifyContent:"center"}}>
          <button className="submitbutton">Login</button>
        </div>
      </div>
    </div>
      
  );
}

export default App;
