import ResturantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RESTAURANT_API } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setfilterRestaurant] = useState([]);

  const handleClick = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Look like you're offline!! Please check your inter connection!!</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="serach-bar">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="search res..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilterRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
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
        {filterRestaurant.map((restaurant, key) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {" "}
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
