import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [islogin, setIsLogin] = useState(true);
  const isOnline = useOnlineStatus();

  useEffect(() => {}, [islogin]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Logo"
          //   src="https://www.codester.com/static/uploads/items/000/018/18519/preview-xl.jpg"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? "✅ " : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                setIsLogin(!islogin);
              }}
            >
              {islogin ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
