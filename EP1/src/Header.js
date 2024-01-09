import { useState } from "react";
import { LOGO_URL } from "./utils/constant";

const Header = () => {
    const [btnName,setBtnName] =useState("Login");
  return (
    <div className="headerContainer">
      <img width={"100px"} height={"100px"} src={LOGO_URL}></img>
      <div className="navContainer">
        <ul className="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="primary-button" onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
