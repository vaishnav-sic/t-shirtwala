import './App.css';
import { Categories, Footer, GetMore, NavBar } from './components';
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
  <BrowserRouter> 
    {/* <NavBar/> */}
    {/* <Categories/> */}
    {/* <GetMore /> */}
    <Footer/>
  </BrowserRouter>   
  );
}

export default App;
