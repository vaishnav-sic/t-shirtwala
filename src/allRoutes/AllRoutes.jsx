// Routes.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import MenWear from "./MenWear";
import WomenWear from "./WomenWear";
import CoupleTshirt from "./CoupleTshirt";
import NewArrival from "./NewArrival";
import BestSellers from "./BestSellers";
import TrackOrder from "./TrackOrder";
import BasicsTshirt from "./BasicsTshirt";
import GraphicTshirt from "./GraphicTshirt";
import AllOverPrintedTshirts from "./AllOverPrintedTshirts";
import WrinkleFreeTshirts from "./WrinkleFreeTshirts";
import Hoodies from "./Hoodies";
import Joggers from "./Joggers";
import ViewAll from "./ViewAll";
import HalfSleeves from "./HalfSleeves";
import FullSleeves from "./FullSleeves";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/menswear" component={MenWear} />
      <Route exact path="/womenswear" component={WomenWear} />
      <Route exact path="/coupletshirt" component={CoupleTshirt} />
      <Route exact path="/newarrival" component={NewArrival} />
      <Route exact path="/bestsellers" component={BestSellers} />
      <Route exact path="/trackorder" component={TrackOrder} />
      <Route exact path="/menswear/basics" component={BasicsTshirt} />
      <Route exact path="/menswear/graphic-tshirt" component={GraphicTshirt} />
      <Route
        exact
        path="/menswear/all-over-printed-tshirts"
        component={AllOverPrintedTshirts}
      />
      <Route
        exact
        path="/menswear/wrinkle-free-tshirts"
        component={WrinkleFreeTshirts}
      />
      <Route exact path="/menswear/hoodies" component={Hoodies} />
      <Route exact path="/menswear/joggers" component={Joggers} />
      <Route exact path="/menswear/view-all" component={ViewAll} />
      <Route
        exact
        path="/menswear/basics/half-sleeves"
        component={HalfSleeves}
      />
      <Route
        exact
        path="/menswear/basics/full-sleeves"
        component={FullSleeves}
      />
    </Router>
  );
};

export default Routes;
