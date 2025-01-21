import { CDN_URL } from "../Utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="m-2 bg-gray-200 w-52 rounded-lg h-[350] hover:cursor-pointer  ">
      <img
        className="w-48 h-32 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-card"
      />
      <div className="p-2 ">
        <h3 className="font-semibold py-1">{name}</h3>
        <h4 className="pb-1 text-sm">{cuisines.join(", ")}</h4>
        <h4 className="">
          ⭐ {avgRating}{" "}
          <span className="font-semibol text-green-400">star </span>
        </h4>
        <h5 className="text-sm">{sla?.deliveryTime} mins</h5>
      </div>
    </div>
  );
};

export const withDiscountedLabel = (ResturantCard) => {
  return (props) => {
    const { header, subHeader } =
      props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute m-2 py-1 px-2 my-[100px] text-white text-sm font-extrabold bg-gradient-to-t from-black via-gray w-48 rounded-md">
          {header} {subHeader}
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
