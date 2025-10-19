import React from "react";
import ProductList from "../components/ProductList";
import { useLocation } from "react-router-dom";
import { products } from "../data/Products";

import "../styles/Shop.css"

export default function Shop() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const filtered = category
  ? products.filter((p) => p.category === category)
  : products;



  return (
    <div className="container">
      <div className="shopPage">
      <h2>Willkommen im Persian Carpet Store</h2>
      <p>In unserem Geschäft finden Sie die besten iranischen Teppiche hinsichtlich Vielfalt und Qualität.</p>
      <ProductList products={filtered} />
    </div>

    </div>
    
  );
}
