import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className=" my-2 p-4 bg-white shadow-lg">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
