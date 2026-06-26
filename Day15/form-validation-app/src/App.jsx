
// import FormValidation from "./components/formvalidation.jsx";
// function App() {
//   return (
//     <div className="App">
//         <FormValidation/>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import StudentRegistrationForm from "./components/Day15FormValidation";
import Navbar from "./components/Day16RoutingConcept";

function App() {
  return (
    <>
        {/* <CheckSyntheticEvent /> */}
        {/* <StudentRegistrationForm /> */}

     
      <Navbar />

      <Routes>
       <Route path="Day15FormValidation" element={<StudentRegistrationForm />} />
       <Route path="/about" element={<h1>About</h1>} />
       <Route path="/products" element={<h1>Products</h1>} />
       <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      
      </>
  );
}

export default App;