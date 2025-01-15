import { CDN_URL } from "../Utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-card"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h5>{sla?.deliveryTime} mins</h5>
    </div>
  );
};

export default ResturantCard;
