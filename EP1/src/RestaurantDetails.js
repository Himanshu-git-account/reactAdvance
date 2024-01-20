import { useContext } from "react";
import { IMG_CDN_URL } from "./utils/constant";
import UserContext from "./utils/UserContext";

const RestaurantDetails = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props?.restaurantObj?.info;

    const {loggedInUser} = useContext(UserContext)
  return (
    <div className="bg-slate-2 00 cursor-pointer  w-56 h-{400px} m-2 rounded-md hover:bg-red-700 hover:text-slate-50 hover:shadow-lg">
      <img className="w-56 h-40" src={IMG_CDN_URL + cloudinaryImageId}></img>
      <div className="resDetails">
        <h3 className="text-lg font-medium pl-1">{name}</h3>
        <h4 className="pl-1">{cuisines.join(", ")}</h4>
        <h4 className="pl-1">{avgRating}</h4>
        <h4 className="pl-1">{costForTwo}</h4>
        <h4 className="pl-1">{sla.deliveryTime} minutes</h4>
        <h4 className="pl-1">{loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestaurantDetails;

export const withVegOnly = () => {
  return (props) => {
    return (
      <>
        <label className=" absolute p-1 m-2 bg-green-500 text-slate-50 rounded-lg">Veg Only</label>
        <RestaurantDetails {...props}></RestaurantDetails>
      </>
    );
  };
};
