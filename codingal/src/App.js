import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MainRouter from './routes/PostRoute';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <MainRouter />
    </BrowserRouter>
 
    </div>
  );
}

export default App;
