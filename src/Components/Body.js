import ResturantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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

  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  //   console.log(searchText);

  //   const filteredRes = listOfRestaurant.filter((res) => {
  //     //   // console.log(res.info.name);
  //     res.info.name.toLowerCase().includes(searchText.toLowerCase());
  //   });
  //   console.log(searchText.length);
  //   if (searchText.length === 0) {
  //     setListOfRestaurant(listOfRestaurant);
  //     // } else {
  //     //   setListOfRestaurant(filteredRes);
  //   }
  //   setListOfRestaurant(filteredRes);
  // };

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
    setfilterRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
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
            // onChange={handleSearch}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilterRestaurant(filteredRestaurant);
              console.log(searchText.length);
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
        {filterRestaurant.map((restaurant, key) => (
          <ResturantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
