import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
     style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
         <h2
        style={{
          color: "white",
          margin: 0,
          cursor: "pointer",
          letterSpacing: "1px",
        }}
      >
        MyWebsite
      </h2>

      <NavLink to="/Day15FormValidation"> Student Registration From </NavLink>

      <NavLink to="/about"> About </NavLink>

      <NavLink to="/products"> Products </NavLink>

      <NavLink to="/contact"> Contact </NavLink>
    </nav>
  );
}

export default Navbar;