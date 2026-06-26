import { baseImgUrl } from "../utils/constants";

const Card = ({ props }) => {
    const { name, cloudinaryImageId, avgRating, costForTwo, category } = props.info;

    return <div className="Card">
        <img src={baseImgUrl + cloudinaryImageId} alt="dish" />
        <div className="Card-Content">
            <h3>{name}</h3>
            <h4>{avgRating}, {category}</h4>
            <h4>{costForTwo}</h4>
        </div>
    </div>;
}
export default Card;