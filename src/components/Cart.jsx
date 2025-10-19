import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";


import "../styles/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="cart">
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} – {item.price} €
                <button className="cartRemoveBtn" onClick={() => removeFromCart(index)}> <MdOutlineDelete style={{marginRight: "10px"}} />Entfernen</button>
              </li>
            ))}
          </ul>
          <p className="cartTotal"><strong>Gesamt: {totalPrice} €</strong></p>
          <div className="btns">
             <button onClick={clearCart}>Warenkorb leeren</button>
             <Link to="/checkout">
             <button >Zur Kasse</button>
             </Link>

          </div>
         
        </>
      )}
    </div>

    </div>
    
  );
}