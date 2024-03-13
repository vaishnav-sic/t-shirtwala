import "./App.css";
import { Categories, NavBar } from "./components";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import CarouselComponent from "./components/Carousel";
import GetMore from "./components/GetMore";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CarouselComponent />
      <Categories />
      <GetMore />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
