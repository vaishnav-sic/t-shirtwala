import React from "react";
import "../cssFiles/categories.css";
import jogger from "../assets/categoriesImages/jogger-pants.png"
import TankTops from "../assets/categoriesImages/tank-top.png"
import GraphicsTshirt from "../assets/categoriesImages/graphic Thisrt.png"
import CropTop from "../assets/categoriesImages/crop-top.png"
import Hoodies from "../assets/categoriesImages/hoodie.png"
import BasicTees from "../assets/categoriesImages/t-shirt.png"

const Categories = () => {
  const categorie = [
    {
      name: "joggers",
      image: jogger,
      color: "#F4BE13",
    },
    {
      name: "Tank Tops",
      image: TankTops,
      color: "#F814F7 ",
    },
    {
      name: "Graphic Tshirt",
      image: GraphicsTshirt,
      color: "#F48E0E  ",
    },
    {
      name: "Crop Top",
      image: CropTop,
      color: "#0973EE ",
    },
    {
      name: "Hoodies",
      image: Hoodies,
      color: "grey",
    },
    {
      name: "Basic Tees",
      image: BasicTees,
      color: "#F63D63 ",
    },
  ];
  return (
    <div className="cat-main">
      <h2> CATEGORIES </h2>
      <div className="cat-container">
        {categorie.map((data,index) => {
          return (
            <div key={index}
              className="cat-container-in"
              style={{ backgroundColor: data.color }}
            >
              <img src={data.image} alt="" />
              <h4>{data.name.toUpperCase()}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
