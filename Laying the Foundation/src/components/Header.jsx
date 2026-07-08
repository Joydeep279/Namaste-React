import { useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="Heading">
      <Link to={"/"} className="logo">
        <img src={logoUrl} alt="logo" />
      </Link>
      <nav>
        <ul className="NavItems">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Cart</li>
          <button onClick={() => setLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "LogOut" : "Login"}
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
