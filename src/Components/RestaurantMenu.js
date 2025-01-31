import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showMenu, setShowMenu] = useState(true);
  const resDetails = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resDetails === null) return <Shimmer />;

  const {
    name,
    totalRatingsString,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
  } = resDetails?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  const categories =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  if (categories.length === 0) return <h4>No menu item </h4>;

  return (
    <div className="flex justify-center ">
      <div className="w-8/12">
        <h1 className="font-extrabold text-xl p-2 my-2">{name}</h1>
        <div className="p-2 border-2 border-gray-200 rounded-xl shadow-2xl font-semibold">
          <h4 className="m-2">
            ⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}
          </h4>
          <p className="mx-2 px-2 text-base  text-orange-600">
            {cuisines.join(", ")}
          </p>
          <h4 className="mx-4">
            {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </h4>
        </div>
        <div className="my-10 py-1 bg-gray-200">
          {/* Categories for accordions */}
          {categories.map((category, index) => (
            <div key={category?.card?.card?.title}>
              <RestaurantCategory
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                // showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
