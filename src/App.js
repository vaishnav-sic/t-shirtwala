
import './App.css';
import { Categories, NavBar,  } from './components';
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom"
import Collection from './components/Collection';

 

function App() {
  return (
    <BrowserRouter>
    
    <NavBar/>
    <Collection/>
    <Categories/> 

    
    </BrowserRouter>
    
  );
}

export default App;
