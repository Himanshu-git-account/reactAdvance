import {useParams} from 'react-router-dom';
import Accordian from "./utils/Accordian";
import ShimmerCard from "./utils/Shimmer/ShimmerCard";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {id} = useParams();

  const [menuList,infoDetails] = useRestaurantMenu(id);

  if (menuList.length === 0) return <ShimmerCard />;
  const { name, cuisines, costForTwoMessage, avgRatingString } = infoDetails;
  return (
    <div className="restaurantMenuContainer">
      <div className="restaurantBody">
        <h1>{name}</h1>
        <span>{cuisines.join(", ")}</span>
        <span className="starRating">{avgRatingString} rating</span>
        <div>{costForTwoMessage}</div>
        {menuList.map((item) => {
          return (
            <Accordian key={item?.card?.card?.id}
              heading={item?.card?.card?.title}
              body={item?.card?.card?.itemCards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
