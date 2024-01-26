
import {useParams} from 'react-router-dom';
import RestaurantCategory from "./utils/RestaurantCategory";
import ShimmerCard from "./utils/Shimmer/ShimmerCard";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { useState } from 'react';


const RestaurantMenu = () => {

  const {id} = useParams();

  const [menuList,infoDetails] = useRestaurantMenu(id);
  const [isOpen,setIsOpen] = useState(null)


  if (menuList.length === 0) return <ShimmerCard />;
  const { name, cuisines, costForTwoMessage, avgRatingString } = infoDetails;
  return (
   
    <div className="flex justify-center items-center">
      <div className="w-6/12 h-4/5 p-5">
        <h1 className='text-lg font-semibold'>{name}</h1>
        <span>{cuisines.join(", ")}</span>
        <span className="float-right bg-green-500 px-2 py-1 rounded-md text-white">{avgRatingString} rating</span>
        <div>{costForTwoMessage}</div>
        {menuList.map((item,index) => {
          return (
            <RestaurantCategory key={index}
              isOpen={index===isOpen && true}
              heading={item?.card?.card?.title}
              body={item?.card?.card?.itemCards}
              handleIsOpen={(()=>{setIsOpen(index)})}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
