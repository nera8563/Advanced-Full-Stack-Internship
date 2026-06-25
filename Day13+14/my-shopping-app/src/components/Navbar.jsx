//  import react from "react";
 
//  function Navbar(){
//     return (
//         <div style = {{backgroundColor:"lightblue",
//         border: "2px solid pink",borderRadius :"20px"
// }} >
//     <a href="#" style={{ marginRight: "20px" }}>Home</a>
//     <a href="#" style={{ marginRight: "20px" }}>About</a> 
//     <a href="#" style={{ marginRight: "20px" }}>Profile</a> 
//     <a href="#">Contact</a>
//           </div>
//     );    
//  }
// export default Navbar;



import React from "react";

function Navbar({
  cartItems,
  setShowCart,
  search,
  setSearch,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "linear-gradient(135deg, #cb27a8, #6a11cb)",
        color: "white",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "32px",
          letterSpacing: "3px",
        }}
      >
        SHOP
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "450px",
          padding: "14px 18px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          backgroundColor: "#fff",
          color: "#333",
          fontSize: "16px",
          boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
        }}
      />

      <button
        onClick={() => setShowCart(true)}
        style={{
          padding: "12px 22px",
          border: "none",
          borderRadius: "10px",
          background: "white",
          color: "#6a11cb",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.08)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        🛒 Cart ({cartItems.length})
      </button>
    </div>
  );
}

export default Navbar;