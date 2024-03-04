
import './App.css';
import { Categories, NavBar } from './components';
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom"

 

function App() {
  return (
    <BrowserRouter>
    
    <NavBar/>
    <Categories/>
    
    </BrowserRouter>
    
  );
}

export default App;
