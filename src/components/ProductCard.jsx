import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const hasDiscount = product.discount;
  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className="productCard">
      <div className="productCardBanner">
        <img
          className="productCardImg"
          src={isHovered ? product.image1 : product.image}
          alt={product.name}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <h3 className="productCardTitle">{product.name}</h3>
      <p className="productCardCaption">{product.description}</p>
      {hasDiscount ? (
        <p className="price">
          <span className="oldPrice">{product.price} €</span>
          <span className="newPrice">{finalPrice.toFixed(2)} €</span>
        </p>
      ) : (
        <p className="price">{product.price} €</p>
      )}
      <button className="addButton" onClick={handleAdd}>
        In den Warenkorb
      </button>
    </div>
  );
}