import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showMenu, setShowMenu] = useState(true);
  const resDetails = useRestaurantMenu(resId);

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

  if (itemCards.length === 0) return <h4>No Recommended</h4>;

  return (
    <div className="flex justify-center">
      <div className="m-4 p-4 w-1/2 ">
        <h3 className="font-bold text-xl p-2">{name}</h3>
        <div className=" p-2 border-2 border-gray-200 rounded-xl  shadow-2xl">
          <h4 className="font-semibold flex m-2">
            <div className="items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                strokeColor="rgba(2, 6, 12, 0.92)"
                fillColor="rgba(2, 6, 12, 0.92)"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                ></circle>
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#21973B"></stop>
                    <stop offset="1" stop-color="#128540"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {avgRating} ({totalRatingsString}) - {costForTwoMessage}
          </h4>
          <p className="mx-2">{cuisines.join(", ")}</p>
          <h4 className="mx-2">
            {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </h4>
        </div>

        <div className=" my-6 p-2">
          <div className="bg-green-300  ">
            <button
              className="flex justify-between"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <h3 className="font-bold text-lg">
                Recommended ({itemCards.length})
              </h3>
              <div className="menu-recommended-downarrow">
                {showMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16l-6-6h12l-6 6z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    transform="rotate(180)"
                  >
                    <path d="M12 16l-6-6h12l-6 6z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
          <div>
            <ul>
              {showMenu &&
                itemCards.map((item) => (
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
                          (
                          {
                            item.card.info.ratings.aggregatedRating
                              .ratingCountV2
                          }
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
