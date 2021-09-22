import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return (
    <div>
      <h2>order sumarry</h2>
      <h4>items ordered : {cart.length}</h4>
      <p>total : {total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
