// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../cssFiles/navbar.css";
import logo from "../assets/categoriesImages/shirtwalaLogo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="leaf">
          <Link to="/">
            <div className="homeicon">
              <img src={logo} alt="HomeIcon" />
            </div>
          </Link>
        </div>
        <div className="leaf">
          <Link to="/menswear">Men's Wear</Link>
          <div className="sub-menu">
            <Link to="/menswear/basics">Basics Tshirt</Link>
            <div className="sub-menu">
              <Link to="/menswear/basics/half-sleeves">Half Sleeves</Link>
              <Link to="/menswear/basics/full-sleeves">Full Sleeves</Link>
            </div>
            <Link to="/menswear/graphic-tshirt">Graphic Tshirt</Link>
            <Link to="/menswear/all-over-printed-tshirts">
              All Over Printed Tshirts
            </Link>
            <Link to="/menswear/wrinkle-free-tshirts">
              Wrinkle Free T-shirts
            </Link>
            <Link to="/menswear/hoodies">Hoodies</Link>
            <Link to="/menswear/joggers">Joggers</Link>
            <Link to="/menswear/view-all">View All</Link>
          </div>
        </div>
        <div className="leaf">
          <Link to="/womenswear">Women's Wear</Link>
          <div className="sub-menu">
            <Link to="/menswear/basics">Basics Tshirt</Link>
            <div className="sub-menu">
              <Link to="/menswear/basics/half-sleeves">Half Sleeves</Link>
              <Link to="/menswear/basics/full-sleeves">Full Sleeves</Link>
            </div>
            <Link to="/menswear/graphic-tshirt">Graphic Tshirt</Link>
            <Link to="/menswear/all-over-printed-tshirts">
              All Over Printed Tshirts
            </Link>
            <Link to="/menswear/wrinkle-free-tshirts">
              Wrinkle Free T-shirts
            </Link>
            <Link to="/menswear/hoodies">Hoodies</Link>
            <Link to="/menswear/joggers">Joggers</Link>
            <Link to="/menswear/view-all">View All</Link>
          </div>
        </div>

        <div className="leaf">
          <Link to="/coupletshirt">Couple Tshirt</Link>
        </div>
        <div className="leaf">
          <Link className="link" to="/newarrival">
            New Arrival
          </Link>
        </div>
        <div className="leaf">
          <Link to="/bestsellers">Best Sellers</Link>
        </div>
        <div className="leaf">
          <Link to="/trackorder">Track Order</Link>
        </div>
      </div>
      <div className="cart"></div>
    </>
  );
};

export default NavBar;
