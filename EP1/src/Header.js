import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Shimmer/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext)
  const [onlineStatus] = useOnlineStatus();
  return (
    <div className="flex justify-between bg-red-700 text-slate-50 text-xl">
      <img className="w-32 h-32" src={LOGO_URL}></img>
      <div className="flex items-center">
        <ul className="flex align-middle">
          <li className="mx-1 px-4 py-2 bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer rounded-md">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-1 px-4 py-2 bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer rounded-md">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="mx-1 px-4 py-2 bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer rounded-md">
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="mx-1 px-4 py-2 bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-1 px-4 py-2 bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer rounded-md">
            Cart
          </li>
          <li className="mx-1 px-4 py-2 bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer rounded-md">
            <button
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="mx-1 px-4 py-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
