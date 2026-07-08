import { Link } from "react-router";
import { baseImgUrl } from "../utils/constants";

const Card = ({ props }) => {
    const { id, name, cloudinaryImageId, avgRating, costForTwo, category } = props.info;

    return <Link to={"/res/" + id} className="Card">
        <img src={baseImgUrl + cloudinaryImageId} alt="dish" />
        <div className="Card-Content">
            <h3>{name}</h3>
            <h4>{avgRating}, {category}</h4>
            <h4>{costForTwo}</h4>
        </div>
    </Link>;
}
export default Card;