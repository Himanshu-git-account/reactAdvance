import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import Accordian from "./utils/Accordian";
import ShimmerCard from "./utils/Shimmer/ShimmerCard";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState([]);
  const [infoDetails, setInfoDetails] = useState({});
  const {id} = useParams();


  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.853532&lng=77.663033&restaurantId="
      +id
    );
    const jsonData = await data.json();
    const info = jsonData?.data?.cards[0].card.card.info;
    setInfoDetails(info);
    const menuData =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    menuData.shift();
    setMenuList(menuData);
  };
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
