import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logoArea">
        <img src="/images/svgs/logo.svg" alt="Camping Shop Logo" className="logo" />
        <h1>Teppichgeschäft</h1>
      </div>

      <div className="searchArea">
        <input type="text" placeholder="Suche nach Produkten..." />
      </div>

      <div className="iconArea">
        <Link to="/login">
          <FaUser className="icon" title="Login" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="icon" title="Warenkorb" />
        </Link>
      </div>
    </header>
  );
}