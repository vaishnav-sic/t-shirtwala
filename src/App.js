
import './App.css';
<<<<<<< Updated upstream
import { Categories, Footer, NavBar } from './components';
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom"
 

=======
import { Categories, NavBar,  } from './components';
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom"
import Collection from './components/Collection';
>>>>>>> Stashed changes

 

function App() {
  return (
    <BrowserRouter>
    
<<<<<<< Updated upstream
    <NavBar/>
    <Categories/>
    <Footer/>
=======
    {/* <NavBar/> */}
    <Collection/>
    {/* <Categories/> */}

>>>>>>> Stashed changes
    
    </BrowserRouter>
    
  );
}

export default App;
