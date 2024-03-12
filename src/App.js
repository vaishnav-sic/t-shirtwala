import "./App.css";
import { Categories, NavBar } from "./components";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import CarouselComponent from "./components/Carousel";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CarouselComponent />
      <Categories />
    </BrowserRouter>
  );
}

export default App;
