import React from "react";
import { products } from "../data/Products";
import { RiHomeOfficeLine } from 'react-icons/ri';


import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

export default function FeaturedProducts() {
  const featured = products.filter(p => p.featured || p.discount);

  return (
    <div className="container">
      <div className="featuredSection">
      <h2 className="featuredsectionTitle"><div className="featuredSectionLogo"><RiHomeOfficeLine /></div> Angebote & Empfehlungen</h2>
      <div className="productGrid">
        {featured.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>

    </div>
    
  );
}