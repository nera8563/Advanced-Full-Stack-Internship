import React, { useState, useEffect } from "react";

function CartItems({ cartItems, setShowCart }) {
  const [items, setItems] = useState(cartItems);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  // Delete with animation
  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
  };

  // Total price
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 400);
    return () => clearTimeout(t);
  }, [items]);

  return (
    <div style={{ padding: "30px", backgroundColor: "#fff" }}>
      <button
        onClick={() => setShowCart(false)}
        style={{
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#cb27a8",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Continue Shopping
      </button>

      <h1 style={{ color: "black" }}>Cart Items</h1>

      {items.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
                transition: "all 0.4s ease",
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              {/* Details */}
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>{item.category}</p>

                {/* Quantity animation feel */}
                <p style={{ fontSize: "18px" }}>
                  Quantity:{" "}
                  <span
                    key={item.quantity}
                    style={{
                      display: "inline-block",
                      animation: "pop 0.3s ease",
                    }}
                  >
                    {item.quantity}
                  </span>
                </p>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  fontSize: "20px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.transform = "scale(1.3)")
                }
                onMouseOut={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              >
                🗑️
              </button>
            </div>
          ))}
        </>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); color: #cb27a8; }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default CartItems;