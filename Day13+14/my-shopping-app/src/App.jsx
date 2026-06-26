// // import Card from "./components/Card";

// // function App() {
// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "space-evenly",
// //         alignItems: "flex-start",
// //         gap: "5px",
// //         width: "100%",
// //         backgroundColor: "white",
// //       }} >
// //    <Card
// //         productImage="https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1760348416790/ab4302d3792fdcd8a9ce19bb637bf543.png"
// //         productName="iQOO Z10R 5G"
// //         rating="4.6"
// //         productPrice={22999} />

// //       <Card
// //         productImage="https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg"
// //         productName="Apple MacBook"
// //         rating="4.8"
// //         productPrice={110300} />

// //       <Card
// //         productImage="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"
// //         productName="iPhone 17e"
// //         rating="4.7"
// //         productPrice={64900} />

// //       <Card
// //         productImage="https://m.media-amazon.com/images/I/81T05w0B3lL.jpg"
// //         productName="You Can"
// //         rating="4.2"
// //         productPrice={1500} />

// //       <Card
// //         productImage="https://assets.adidas.com/images/w_600,f_auto,q_auto/7333b8b0fdc24dc2bc7983d54128d7e4_9366/Backpack_With_Pencil_Case_Black_JW0315_01_00_standard.jpg"
// //         productName="Adidas Bag"
// //         rating="3.7"
// //         productPrice={600} />

// //       <Card
// //         productImage="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"
// //         productName="Milton Bottle"
// //         rating="5"
// //         productPrice={999}  />
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import MainLoading from "./components/MainLoading";
// import CartItems from "./components/CartItems";
// import {Routes,Route} from "react-router-dom"
// import Home from "./components/home"
// import About from "./components/about"
// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [search, setSearch] = useState("");

//   return (
//     <>
//     <Routes>
//       <Route path="/" element = {<MainLoading/>}/>
//       <Route path="/about" element = {<About/>}/>
//       <Route path="/home" element = {<Home/>}/>
//     </Routes>
//       <Navbar
//         cartItems={cartItems}
//         setShowCart={setShowCart}
//         search={search}
//         setSearch={setSearch}
//       />

//       {showCart ? (
//         <CartItems
//           cartItems={cartItems}
//           setShowCart={setShowCart}
//         />
//       ) : (
//         <MainLoading
//           cartItems={cartItems}
//           setCartItems={setCartItems}
//           search={search}
//         />
//       )}
//     </>
//   );
// }

// export default App;

// // import MyFirstUseStateComponent from './components/UseEffect.jsx';

// // function App() {
// //   return (
// //     <div className="App">
// //       <MyFirstUseStateComponent />
// //     </div>
// //   );
// // }

// // export default App;




import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainLoading from "./components/MainLoading";
import CartItems from "./components/CartItems";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar
        cartItems={cartItems}
        setShowCart={setShowCart}
        search={search}
        setSearch={setSearch}
      />

      {showCart ? (
        <CartItems
          cartItems={cartItems}
          setShowCart={setShowCart}
        />
      ) : (
        <MainLoading
          cartItems={cartItems}
          setCartItems={setCartItems}
          search={search}
        />
      )}
    </>
  );
}

export default App;