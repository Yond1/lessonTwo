import React from "react";
import products from "./../../image/DataImageStoreItems";

const StoreItems = ({viewList}) => {
  
  const container = viewList ? 'container' : 'container-list'

  return (
    <div className={container}>
      {viewList
        ? products.map((sneaker) => {
            return (
              <div
                key={sneaker.img}
                className="card-container"
                style={{ backgroundImage: "url(" + sneaker.img + ")" }}
              >
                <div className="title">{sneaker.name}</div>
                <div className="color">{sneaker.color}</div>
                <div className="add-bucket">
                  <div className="price">$ {sneaker.price}</div>
                  <div className="bth">Add to cart</div>
                </div>
              </div>
            );
          })
        : products.map((sneaker) => {
            return (
              <div
                key={sneaker.img}
                className="card-container-list"
              >
                <div className="image-list">
                  <img src={sneaker.img} alt="" />
                </div>
                <div className="title-list">{sneaker.name}</div>
                <div className="color-list">{sneaker.color}</div>
                <div className="add-bucket-list">
                  <div className="price-list">${sneaker.price}</div>
                  <div className="bth">Add to cart</div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default StoreItems;
