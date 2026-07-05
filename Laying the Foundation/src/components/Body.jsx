import { useEffect, useState } from "react";
import Card from "./CardLayout";

const Body = () => {
  console.log("ReRenderd!!");

  const [searchText, setSearchText] = useState("");
  const [resList, setResList] = useState([]);
  const [mainList, setMainList] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);
  const [isShowingSearch, setIsShowingSearch] = useState(true);

  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5454&lng=88.3600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setMainList(resData);
    setResList(resData);
  }

  function filterRes() {
    if (isFiltered) {
      setResList(mainList);
      setIsFiltered(false);
    } else {
      const filteredList = mainList.filter((item) => item.info.avgRating > 4.5);
      setResList(filteredList);
      setIsFiltered(true);
    }
  }

  function searchRest() {
    if (isShowingSearch) {
      setResList(
        mainList.filter((items) =>
          items.info.name.toLowerCase().includes(searchText),
        ),
      );
    }
  }

  return (
    <div className="Main-Container">
      <div className="Search-Container">
        <input
          type="text"
          placeholder="Search..."
          id="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button id="searchBtn" onClick={searchRest}>
          Search
        </button>
        <button id="topRated" onClick={filterRes}>
          {isFiltered ? "Back" : "Top Rated Restaurants"}
        </button>
      </div>
      {resList.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="Card-Container">
          {resList.map((curRes) => {
            return <Card props={curRes} key={curRes.info.id} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Body;
