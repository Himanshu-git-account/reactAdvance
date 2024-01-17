import { useState } from "react";
import { LOGO_URL } from "./utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Shimmer/useOnlineStatus";

const Header = () => {
    const [btnName,setBtnName] =useState("Login");
    const [onlineStatus] = useOnlineStatus();
  return (
    <div className="headerContainer">
      <img width={"100px"} height={"100px"} src={LOGO_URL}></img>
      <div className="navContainer">
        <ul className="navItems">
          <li>Online:{onlineStatus?"Active":"InActive"}</li>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About Us</Link> </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="primary-button" onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
