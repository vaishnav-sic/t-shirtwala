import './App.css';
import { Categories, NavBar,  } from './components';
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom"
 


 

function App() {
  return (
    <BrowserRouter>
    
    <NavBar/>
    <Categories/>
    <Footer/>
    
    </BrowserRouter>
    
  );
}

export default App;
