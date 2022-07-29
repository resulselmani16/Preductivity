import React from "react";
import preductivityLogo from "../../../assets/Preductivity-black.png";

const Navbar = () => {
  return (
    <div className="navbar flex bg-cyan-300">
      <img src={preductivityLogo} alt="preductivity" />
      <h1>Preductivity</h1>
    </div>
  );
};

export default Navbar;
