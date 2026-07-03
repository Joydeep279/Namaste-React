import { useEffect, useState } from "react";
import Card from "./CardLayout";

const Body = () => {
  console.log("ReRenderd!!");

  const [resList, setResList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    getApiData();
  }, [])

  async function getApiData() {
    const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5454&lng=88.3600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();

    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    console.log("ReRendered!!!");

  }

  function filterRes() {
    if (isFiltered) {
      setResList(data);
      setIsFiltered(false);
      return;
    }
    const filteredList = resList.filter((item) => item.info.avgRating > 4.1);
    setResList(filteredList);
    setIsFiltered(true);
  }

  return (
    <div className="Main-Container">
      <div className="Search-Container">
        <input type="text" placeholder="Search..." id="searchInput" />
        <button id="searchBtn">Search</button>
        <button id="topRated" onClick={filterRes}>
          {isFiltered ? "Back" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="Card-Container">
        {resList.map((curRes) => {
          return <Card props={curRes} key={curRes.info.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
