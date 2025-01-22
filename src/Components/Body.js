import ResturantCard, { withDiscountedLabel } from "./RestaurantCard";
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

  const RestaurantCardDiscounted = withDiscountedLabel(ResturantCard);

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
    <div className="m-4">
      <div className="m-4 flex justify-center items-center">
        <div className="m-2 p-2 px-2 flex justify-between">
          <input
            className="border-2 border-gray-300 rounded-l-md "
            type="text"
            placeholder="  search res..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className=" bg-gray-300 rounded-r-md p-1 px-2"
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
          className="m-2 p-2 px-10 bg-orange-300 shadow-lg rounded-md"
          onClick={() => handleClick()}
        >
          Top rated restaurat
        </button>
      </div>

      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant, key) => (
          <div key={restaurant?.info?.id}>
            <Link to={"/restaurants/" + restaurant?.info?.id}>
              {/* {Object.keys(restaurant?.info?.aggregatedDiscountInfoV3)
                .length !== 0 ? (
                <RestaurantCardDiscounted resData={restaurant} />
              ) : ( */}
                <ResturantCard resData={restaurant} />
              {/* )} */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
