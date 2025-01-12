import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resDetails, setResDetails] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResDetails(json?.data);
    // setResDetails(json?.data?.cards[2]?.card?.card?.info);
  };
  if (resDetails === null) return <Shimmer />;

  const {
    name,
    totalRatingsString,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
  } = resDetails?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(
  //   resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
  // );
  // console.log("Item lenght" + itemCards.length);
  if (itemCards.length === 0) return <h4>No Recommended</h4>;

  // console.log(
  //   resDetails?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards[0].card.info
  // );

  // ratings.aggregatedRating.rating

  return (
    <div className="restaurant-container"> 
      <div className="restaurant">
        <div>
          <h3 className="res-Name">{name}</h3>
          <h4>
            {avgRating}({totalRatingsString}) - {costForTwoMessage}
          </h4>
          <p>{cuisines.join(", ")}</p>
          <h4>
            {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </h4>
        </div>

        <div>
          <div>
            <button className="btn-menu-recommended">
              <h3 className="menu-recommended">
                Recommended ({itemCards.length})
              </h3>
              <div className="menu-recommended-downarrow">
                <div>

                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16l-6-6h12l-6 6z" />
                </svg>
              </div>
            </button>
          </div>
          <div>
            <ul>
              {itemCards.map((item) => (
                <div className="menu-item" key={item.card.info.id}>
                  <li className="menu-items-list">
                    <h3>{item.card.info.name}</h3>
                    <h3>₹{item.card.info.price / 100}</h3>
                    <div className="menu-item-rating">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                          width="14"
                          height="14"
                          fill="none"
                          role="img"
                          fillcolor="#11664"
                        >
                          <rect width="12" height="12" fill="white"></rect>
                          <path
                            d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                            fill="#116649"
                          ></path>
                          <svg />
                        </svg>
                      </div>
                      <div className="menu-item-ratingNum">
                        {item.card.info.ratings.aggregatedRating.rating}
                      </div>
                      <div className="menu-item-ratingCount">
                        {" "}
                        ({item.card.info.ratings.aggregatedRating.ratingCountV2}
                        )
                      </div>
                    </div>
                    <p>{item.card.info.description}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
