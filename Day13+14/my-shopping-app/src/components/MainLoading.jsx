import React, { useState } from "react";

const products = [
  {
    id: 1,title: "Men's T-Shirt", category: "Clothing",rating: 4.5, stock: 20,image: "https://image.hm.com/assets/hm/65/86/6586560871845dd06b093e3777ddfb71f78ff84b.jpg?imwidth=1260",description: "Comfortable cotton t-shirt",quantity:0
  },
  {
    id: 2,title: "Blue Jeans",category: "Clothing", rating: 4.4,stock: 15,image:"https://image.hm.com/assets/hm/c5/14/c514691c2102818c4e9c2cd5f5a77040d9d9f0f1.jpg?imwidth=1260",description: "Stylish slim-fit jeans",quantity:0
  },
  {
    id: 3,title: "Leather Jacket",category: "Clothing",rating: 4.8,stock: 10,image: "https://tse4.mm.bing.net/th/id/OIP.fEVA4j6Swv9QV6rpYXuYVAHaLH?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3", description: "Premium leather jacket",quantity:0
  },
  {
    id: 4,title: "Nike Shoes",category: "Footwear",rating: 4.7,stock: 18,image:"https://i.pinimg.com/originals/86/95/c1/8695c192c46b64242ddd8cd43a6f3b33.jpg",description: "Comfortable running shoes",quantity:0
  },
  {
    id: 5, title: "Smart TV", category: "Electronics", rating: 4.9, stock: 8, image:"https://cdn.mos.cms.futurecdn.net/dm9qefzptw9gep3e33pFuK.jpg",description: "55-inch 4K Smart TV",quantity:0
  },
  {
    id: 6,title: "Refrigerator",category: "Home Appliances",rating: 4.6,stock: 7,image:"https://tse3.mm.bing.net/th/id/OIP.hogyFfiDWFdef4xI2CYskwHaIZ?cb=thfvnextfalcon2&pid=ImgDet&w=474&h=537&rs=1&o=7&rm=3", description: "Double-door refrigerator",quantity:0
  },
  {
    id: 7,title: "Microwave Oven",category: "Home Appliances",rating: 4.5,stock: 9,image:"https://hips.hearstapps.com/hmg-prod/images/wu4719microwavewithgrill-01-pcm155026-1574424415.jpg",description: "Fast heating microwave",quantity:0
  },
  {
    id: 8,title: "Washing Machine",category: "Home Appliances",rating: 4.7,stock: 6,image: "https://www.electroluxarabia.com/contentassets/a8462da74c384f7da463f95a3a2cfc20/how-to-clean-washing-machine-banner.jpg?width=464",description: "Fully automatic washing machine",quantity:0
  },
  {
    id: 9,title: "Office Chair",category: "Furniture",rating: 4.4,stock: 12,image:"https://m.media-amazon.com/images/I/91NY8auQ6HL._AC_SL1500_.jpg",description: "Ergonomic office chair",quantity:0
  },
  {
    id: 10,title: "Wooden Table",category: "Furniture",rating: 4.5,stock: 5,image: "https://i.pinimg.com/originals/27/aa/75/27aa75249625dd0f27bf085409a26df8.jpg", description: "Modern wooden table",quantity:0
  },
  {
    id: 11,title: "Backpack",category: "Accessories",rating: 4.3,stock: 25,image:"https://m.media-amazon.com/images/I/61Tctfh2GQL._AC_SL1500_.jpg",description: "Durable travel backpack",quantity:0
  },
  {
    id: 12,title: "Wrist Watch",category: "Accessories",rating: 4.8,stock: 14,image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDHhK25286DzXinuzzbrq1kOwou3bNYpo8BZw3jCW8ArJ4h3nhJI0vDBy05EbsB5BG_ndws8h-uhDuT9ZuEtfeynqXMVpJQAUxIS9hMsFTxJkzyEDeDKyHNw",description: "Elegant analog watch",quantity:0
  },
];

const MainLoading = ({ cartItems, setCartItems, search })  => {
const [productList, setproductList] = useState(products);

function addToCart(product) {

  if (product.quantity === 0) {
    alert("Please select quantity first");
    return;
  }

  if (product.quantity > product.stock) {
    alert("Not enough stock available");
    return;
  }
  // stock decrease
  const updatedProducts = productList.map((item) => {
  if (item.id === product.id) {
    return {
      ...item,
      stock: item.stock - item.quantity,
      quantity: 0, 
    };
  }
  return item;
});

setproductList(updatedProducts);

  // cart me add
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
}

function increaseQuantity(id) {
  const updatedProducts = productList.map((product) => {
    if (product.id === id && product.quantity < product.stock) {
      return { ...product, quantity: product.quantity + 1 };
    }
    return product;
  });

  setproductList(updatedProducts);
}
function decreaseQuantity(id) {
  const updatedProducts = productList.map((product) => {
    if (product.id === id && product.quantity > 0) {
      return { ...product, quantity: product.quantity - 1 };
    }
    return product;
  });

  setproductList(updatedProducts);
}
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "25px",
        padding: "30px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {productList
  .filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  .map((product) => (
        <div
          key={product.id}
          style={{
            width: "280px",
            backgroundColor: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "15px" }}>
            <h2
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              {product.title}
            </h2>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p
              style={{
                color: "#666",
                fontSize: "14px",
                minHeight: "40px",
              }}
            >
              {product.description}
            </p>

            <p>⭐ {product.rating}</p>

            <p>📦 Stock: {product.stock}</p>

           <p
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "12px",
    fontWeight: "bold",
  }}
>
  Quantity:

  <span
    onClick={() => decreaseQuantity(product.id)}
    style={{
      width: "30px",
      height: "30px",
      backgroundColor: "#cb27a8",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "20px",
    }}
  >
    -
  </span>

  <span
    style={{
      minWidth: "35px",
      textAlign: "center",
      padding: "6px 12px",
      backgroundColor: "#f3f3f3",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "16px",
    }}
  >
    {product.quantity}
  </span>

  <span
    onClick={() => increaseQuantity(product.id)}
    style={{
      width: "30px",
      height: "30px",
      backgroundColor: "#cb27a8",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "20px",
    }}
  >
    +
  </span>
</p>
   <button
onClick={() => addToCart(product)}
style={{
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#cb27a8",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
}}
>
  Add to Cart
</button>
  </div>
  </div>
))} </div>
  );
};

export default MainLoading;