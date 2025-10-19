import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const handleConfirm = () => {
    alert("Vielen Dank für Ihre Bestellung!");
    clearCart();
  };

  return (
    <div className="container">
      <div className="checkoutPage">
      <h2>Bestellübersicht</h2>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, i) => (
              <li key={i}>
                {item.name} – {item.price} €
              </li>
            ))}
          </ul>
          <h3 className="totalPrice">Gesamt: {totalPrice} €</h3>
          <button className="btn" onClick={handleConfirm}>Bestellung bestätigen</button>
        </>
      )}
    </div>

    </div>
    
  );
}