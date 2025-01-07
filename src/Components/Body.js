import ResturantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.card.card.info.avgRating > 4
    );
    setListOfRestaurant(filteredList);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    let text = e.target.value;

    const filteredRes = listOfRestaurant.filter((res) =>
      res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(searchText.length);
    if (searchText.length > 1) {
      setListOfRestaurant(filteredRes);
    } else {
      setListOfRestaurant(resList);
    }
    setListOfRestaurant(filteredRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    console.log("inside if");
    return <Shimmer />;
  }
  return (
    <div className="body">
      <p>{"value: " + searchText}</p>
      <div className="serach-bar">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="search res..."
            value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
            onChange={handleSearch}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(searchText.length);

              setListOfRestaurant(filteredRes);
            }}
          >
            search
          </button>
        </div>
        {/* <button onClick={handleClick}>Top rated restaurat</button> */}
        <button
          className="filter-btn"
          onClick={
            // handleClick
            () => handleClick()
            //   {
            //   ListRes = ListRes.filter((res) => res.card.card.info.avgRating > 4);
            //   console.log(ListRes);
            // }
          }
        >
          Top rated restaurat
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant, key) => (
          <ResturantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
