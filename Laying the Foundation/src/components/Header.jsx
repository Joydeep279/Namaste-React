import { useState } from "react";
import { logoUrl } from "../utils/constants";
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="Heading">
      <div className="logo">
        <img src={logoUrl} alt="logo" />
      </div>
      <nav>
        <ul className="NavItems">
          <li>Home</li>
          <li>About</li>
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
