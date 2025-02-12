import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data?.title);
  // console.log(showItems); //false

  const handleClick = () => {
    // console.log(setShowIndex);
    setShowIndex();
  };
  return (
    <div className=" my-2 p-4 bg-white shadow-lg">
      <div
        className="flex justify-between"
        data-testid=""
        onClick={handleClick}
      >
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
