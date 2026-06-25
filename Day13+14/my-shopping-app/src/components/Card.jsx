// import React from "react";

// function Card(props) {
//   return (
//     <div
//       style={{
//         width: "180px",
//         padding: "10px",
//         margin: "0px",
//         backgroundColor: "white",
//       }} >

//       <img src={props.productImage} alt="" style={{ width: "100%", height: "180px", objectFit: "contain", }}  />
//       <p style={{ fontSize: "18px", marginTop: "10px", marginBottom: "5px",}}> {props.productName} </p>
      
//       <div style={{color: "#ff9900", fontSize: "18px",}} >
//       <span style={{ color: "#007185", fontSize: "15px", }}> Rating :{" "}({props.rating})</span>
//       </div>
      
//       <h2 style={{ fontWeight: "500", marginTop: "8px", marginBottom: "8px", color : "#888d8d", }}> ₹{props.productPrice} </h2>
//       <p style={{ margin: "0", fontSize: "14px", }} >FREE Delivery </p>
//       <p style={{ color: "#565959", fontSize: "13px", }} >  Wednesday, June 24 </p>
//     </div>
//   );
// }
// export default Card;


import React from "react";

function Card({ title, category, rating, stock, image, description }) {
  return (
    <div
      style={{
        width: "220px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3>{title}</h3>
      <p>{category}</p>
      <p>{description}</p>
      <p>⭐ {rating}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default Card;