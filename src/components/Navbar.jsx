import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {

  const { cartItems } = useContext(CartContext);
  // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalItems = cartItems.length; //just 1 of each product exist



 
  return (
    // <cantainer className="cantainer">
      <nav className="navbar">
      <div className="navLogo">
        <Link to="/">
          <span>Persian Carpet Store</span>
        </Link>
      </div>

      <ul className="navLinks">
        <li><NavLink to="/">Startseite</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/about">Über uns</NavLink></li>
        <li><NavLink to="/contact">Kontakt</NavLink></li>
      </ul>

      <div className="navIcons">
        <Link to="/login"><FaUser className="icon" title="Login" /></Link>
        <Link to="/cart" className="cartIconWrapper">
          <FaShoppingCart className="icon" />
          {totalItems > 0 && <span className="cartBadge">{totalItems}</span>}
        </Link>


      </div>
    </nav>

    // </cantainer>
    
  );
}