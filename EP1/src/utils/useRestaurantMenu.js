import { useEffect, useState } from "react";
import { MENU_DATA } from "./constant";

const useRestaurantMenu = (id) => {
  const [menuList, setMenuList] = useState([]);
  const [infoDetails, setInfoDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      MENU_DATA+id
    );
    const jsonData = await data.json();
    const info = jsonData?.data?.cards[0].card.card.info;
    setInfoDetails(info);
    const menuData =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    menuData.shift();
    setMenuList(menuData);
  };

  return [menuList, infoDetails];
};

export default useRestaurantMenu;
