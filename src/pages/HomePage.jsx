import React, { useEffect } from "react";
import "./HomePage.css";
import Header from "../components/Header";

import { products } from "../data/products";

const HomePage = () => {
  // fetch('http://localhost:3000/api/products').then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data.length);

  //   })
  // })

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      if(response.ok){
        const data = await response.json()
        console.log(data);
      }else{
        console.error("Wrong URL provided")
      }
      
    } catch (error) {
      console.error(error);
      
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <title>Ecommerce Website</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            const {
              id,
              image: productImage,
              name: productName,
              rating: { stars: productStars, productCount },
              priceCents: productPrice,
            } = product;
            return (
              <div key={id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={productImage} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {productName}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${productStars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {productCount}
                  </div>
                </div>

                <div className="product-price">
                  ${(productPrice / 100).toFixed(2)}
                </div>
                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src={"../assets/images/icons/checkmark.png"} />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
