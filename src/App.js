import "./cssFiles/Collection.css";
import { Categories, NavBar, Footer } from "./components";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Collection from "./components/Collection";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Collection />
      <Categories />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
