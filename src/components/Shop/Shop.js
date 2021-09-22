import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    // console.log("clicked");
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-containeer">
        <h2 style={{ textAlign: "center", color: "tomato" }}>
          products: {products.length}
        </h2>
        {products.map((product) => (
          <Product
            key={product.key}
            handleAddToCart={handleAddToCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
