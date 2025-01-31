import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={uuidv4()}
          className="my-4 p-2 border-b-2 border-gray-300 flex justify-between"
        >
          <div className="w-9/12 h-full">
            <div className="font-bold text-sm">
              <div>{item.card.info.isVeg === 1 ? "🟩" : "🟥"}</div>
              <span>{item.card.info.name}</span>
              <div>
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </div>
            </div>
            <p className="text-gray-700">{item.card.info.description}</p>
          </div>
          <div className="m-4 p-2 rounded-xl h-1/2">
            <div className="absolute items-center">
              <button
                className="bg-black text-white shadow-lg m-auto p-2 px-2 my-28 mx-10 rounded-md font-bold"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="rounded-2xl w-44"
              src={CDN_URL + item.card.info.imageId}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
