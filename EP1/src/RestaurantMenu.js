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
    <div className="flex justify-center items-center">
      <div className="w-6/12 h-4/5 p-5">
        <h1 className='text-lg font-semibold'>{name}</h1>
        <span>{cuisines.join(", ")}</span>
        <span className="float-right bg-green-500 text-white">{avgRatingString} rating</span>
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
