// src/components/Products.jsx
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

export default function Products({ addToCart }) {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <section className="products" id="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product" key={p.id}>
            <img
              src={p.img}
              alt={p.name}
              onClick={() => handleProductClick(p)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => handleProductClick(p)} style={{ cursor: "pointer" }}>
              {p.name}
            </h3>

            <p className="desc">{p.desc}</p>
            <p><strong>KES {p.price}</strong></p>
            <p className="home-ingredients">{p.ingredients}</p>

            <button className="cart-btn" onClick={() => handleProductClick(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
