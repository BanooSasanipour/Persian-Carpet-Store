import React, { useState } from "react";
import { products } from "../data/Products";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

export default function ProductList({products}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Alle" || p.category === category;
    return matchName && matchCategory;
  });

  const categories = ["Alle", ...new Set(products.map((p) => p.category).filter((c) => c && c.trim() !== ""))

];

  return (
    <div className="productList">
      <div className="filterBar">
        <input
          type="text"
          placeholder="Suche..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
       <div className="productGrid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>


    </div>
  );
}
