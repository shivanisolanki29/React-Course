import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  const [islogin, setIsLogin] = useState(true);

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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              setIsLogin(!islogin);
            }}
          >
            {islogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
