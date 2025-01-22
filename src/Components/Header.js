import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [islogin, setIsLogin] = useState(true);
  const isOnline = useOnlineStatus();

  const user = useContext(UserContext);
  // const {loggedInUser} = useContext(UserContext);

  useEffect(() => {}, [islogin]);

  return (
    <div className="m-4 p-4 flex bg-pink-100 border-0 border-black justify-between shadow-lg rounded-md">
      <div className="mr-10">
        <img className="w-32 rounded-md" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="mx-8 p-2 px-4 flex items-center">
        <ul className="flex justify-between">
          <li className="px-2">Online Status: {isOnline ? "✅ " : "❌"}</li>
          <li className="px-2 hover:bg-red-200 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:bg-red-200 rounded-md">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 hover:bg-red-200 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 hover:bg-red-200 rounded-md">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 hover:bg-red-200 rounded-md">Cart</li>
          <li className="px-2 hover:bg-red-200 rounded-md">
            <button
              className="btn-login font-semibold"
              onClick={() => {
                setIsLogin(!islogin);
              }}
            >
              {islogin ? "Login" : "Logout"}
            </button>
          </li>
          <li className="px-2 hover:bg-red-200 rounded-md font-bold bg-orange-300">
            {user.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
