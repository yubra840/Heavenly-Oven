// src/pages/Cart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.css";


export default function Cart({ cart, updateQty, removeFromCart }) {
      const navigate = useNavigate();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="cart-page">
      <div className="cart-left">
        <h2>Your Cart</h2>

        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />

            <div className="cart-info">
              <div className="cart-header">
                <h3>{item.name}</h3>

              </div>

              <p className="ingredients">
                Ingredients: {item.ingredients.join(", ")}
              </p>

              <p>Price: KES {item.price}</p>

              <div className="qty-controls">
                <button onClick={() => updateQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)}>+</button>
              </div>
              <div className="item-actions">
                <p className="item-total">
                Subtotal: KES {item.price * item.qty}
              </p>
              <div className="remove-item" onClick={() => removeFromCart(item.id)}>
               <DeleteOutlineIcon
                className="delete-icon"
                onClick={() => removeFromCart(item.id)}
               />
                <span className="remove-text">Remove</span>
                </div>
              </div>
              
             
            </div>
            
          </div>
        ))}
      </div>

      <div className="cart-right">
  <h3>Cart Summary</h3>
  <p><strong>Total: KES {subtotal}</strong></p>

  <button className="checkout-btn">
    Proceed to Checkout
  </button>

  <button
    className="continue-btn"
    onClick={() => navigate(-1)}
  >
    Continue Shopping
  </button>
</div>

    </section>
  );
}
