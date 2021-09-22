import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const { name, img, price, stock, seller } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />; //font-awesome icon

  return (
    <div className="products-item-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>by : {seller}</p>
        <h4>price : {price}</h4>
        <p>
          only <strong>{stock}</strong> left in stock - order now
        </p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          {" "}
          {element}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
