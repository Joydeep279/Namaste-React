import data from "../utils/RawApiData"
import Card from "./CardLayout";

const Body = () => {
    return <div className="Main-Container">
        <div className="Search-Container">
            <input type="text" placeholder="Search..." id="searchInput" />
            <button id="searchBtn">Search</button>
        </div>
        <div className="Card-Container">
            {
                data.map((curRes) => {
                    return <Card props={curRes} key={curRes.info.id} />
                })
            }
        </div>
    </div>
}
export default Body;