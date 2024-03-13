import React from 'react'


const Collection = () => {
  return (
    <div className="Collection-All">
      <h3>Collection</h3>
      <div className="Collection-Main">
        <div className="Collection">
          <div className="One">
            <div className="One-Text">
              <h1 className="Head-Tittle"> GRAPGIC T-SHIRT</h1>
              <p className="Tittle">STARTS FROM 299</p>
              <button className="Shopnow-Button">SHOP NOW </button>
            </div>
            <div className="Imgs">
              <img
                className="Img-fluid"
                src="https://images.bewakoof.com/t1080/men-s-black-crest-mark-graphic-printed-oversized-t-shirt-625622-1701150220-1.jpg"
              ></img>
            </div>
          </div>
          <div className="Two">
            <div className="4">
              <h1 className="Head-Tittle"> SLIM-FIT JOGGERS</h1>
              <p className="Tittle">100% COTTON</p>
              <button className="Shopnow-Button">SHOP NOW </button>
            </div>
            <div className="Imgs">
              <img
                className="Img-fluid"
                src="https://www.italiancolony.com/cdn/shop/files/0A0A9648.jpg?v=1696586930&width=600"
              ></img>
            </div>
          </div>
          <div className="Three">
            <div className="4">
              <h1 className="Head-Tittle"> Women's Tops</h1>
              <h2 className="Tittle">
                Buy any 3 & <span> get 50% off</span>
              </h2>
              <h5 className="Awsm">#BEAWESOME</h5>
              <button className="Shopnow-Button">SHOP NOW </button>
            </div>
            <div className="Imgs">
              <img
                className="Img-fluid"
                src="https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/781229090/NIR_022_A__1_.jpg"
              ></img>
            </div>
          </div>
          <div className="Four">
            <div className="4">
              <h1 className="Head-Tittle">Grapgic Crop-Top</h1>
              <h2 className="Tittle">
                Buy any 3 & <span> get 50% off</span>
              </h2>
              <button className="Shopnow-Button">SHOP NOW </button>
            </div>{" "}
            <div className="Imgs">
              <img
                className="Img-fluid"
                src="https://www.beyoung.in/api/cache/catalog/products/crop_top_rectengle_image_update_22_2_2022/navy_blue_plain_crop_top_base_22_2_2022_700x933.jpg"
              ></img>
            </div>
          </div>
        </div>
        <button className="Extra-Button">CHECKOUT OUR BEST SELLERS >>></button>
      </div>
    </div>
  );
}

export default Collection;