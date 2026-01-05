// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [dark, setDark] = useState(false);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔒 Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [{ ...product, qty: 1 }, ...prev];
    });
  };

  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: p.qty + amount } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  useEffect(() => {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  setCartCount(totalQty);
}, [cart]);


  return (
    <Router>
      <ScrollToHash />
      <Navbar  cartCount={cartCount}
        toggleTheme={() => setDark(!dark)}
        dark={dark}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Products addToCart={addToCart} />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQty={updateQty}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
    
  );
}
