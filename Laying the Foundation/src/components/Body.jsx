import { useState } from "react";
import data from "../utils/RawApiData"
import Card from "./CardLayout";

const Body = () => {

    console.log("ReRenderd!!!");

    const [resList, setResList] = useState(data);
    const [isFiltered, setIsFiltered] = useState(false);

    function filterRes() {
        if (isFiltered) {
            setResList(data);
            setIsFiltered(false);
            return;
        }
        const filteredList = resList.filter(item => item.info.avgRating > 4.1);
        setResList(filteredList);
        setIsFiltered(true)
    }

    return <div className="Main-Container">
        <div className="Search-Container">
            <input type="text" placeholder="Search..." id="searchInput" />
            <button id="searchBtn">Search</button>
            <button id="topRated" onClick={filterRes}>{isFiltered ? "Back" : "Top Rated Restaurants"}</button>
        </div>
        <div className="Card-Container">
            {
                resList.map((curRes) => {
                    return <Card props={curRes} key={curRes.info.id} />
                })
            }
        </div>
    </div>
}
export default Body;