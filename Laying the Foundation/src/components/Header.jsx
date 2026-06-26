import { logoUrl } from "../utils/constants";
const Header = () => {

    return <div className="Heading">
        <div className="logo">
            <img src={logoUrl} alt="logo" />
        </div>
        <nav>
            <ul className="NavItems">
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </nav>
    </div>
}
export default Header;