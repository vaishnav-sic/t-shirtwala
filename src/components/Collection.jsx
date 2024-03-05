import React from 'react'


const Collection = () => {
  return (
    <div className="Collection-main">
      <div className="Collection">
        Collection
        <div className="Main">
          <div className="Left-Part">
            <div className="Collection4">
              <div style={{ textAlign: "center" }}>
                <h2>GRAPHIC T-SHIRTS</h2>
                <p>Starts from Rs 299/-</p>
                <button style={{ marginRight: "10px" }}>SHOP NOW</button>
              </div>
            </div>
            <div className="Collection4"></div>
          </div>

          <div className="Right-Part">
            <div className="Collection4">
              <div className="Collection4-In">
                <h1> SLIM-FIT JOGGERS</h1>
                <p>100% COTTON</p>
                <button className="Shopnow-Button">SHOP NOW </button>
              </div>
            </div>

            <div imgs>
              <img
                className="img-fluid"
                src="https://images.bewakoof.com/t1080/men-s-black-crest-mark-graphic-printed-oversized-t-shirt-625622-1701150220-1.jpg"
              ></img>

              <img src="https://images.bewakoof.com/t1080/men-s-black-crest-mark-graphic-printed-oversized-t-shirt-625622-1701150220-1.jpg"></img>
            </div>
          </div>
        </div>
        {/* <div className="Main">
        <div className="Collection2">Left part</div>
        <div className="Collection4">right part</div>
      </div> */}
      </div>
    </div>
  );
}

export default Collection