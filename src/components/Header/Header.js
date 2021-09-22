import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" />
        <nav>
          <a href="/shop">shop</a>
          <a href="/orders">Orders</a>
          <a href="/invertory">Manage inventory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
