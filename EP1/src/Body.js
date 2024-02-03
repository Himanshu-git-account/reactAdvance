import {  useContext, useEffect, useState } from "react";
import RestaurantDetails,{withVegOnly} from "./RestaurantDetails";

import { restaurantList } from "./utils/mockData";
import ShimmerCard from "./utils/Shimmer/ShimmerCard";
import { debounceFunc } from "./utils/commonUtils";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Shimmer/useOnlineStatus";
import UserContext from "./utils/UserContext";


export const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(false);

  const [onlineStatus] = useOnlineStatus();
  const {loggedInUser,setLoggedUser} = useContext(UserContext)

  const RestaurantDetailsHOC = withVegOnly(RestaurantDetails)

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loader) {
      fetchData();
    }
  };

  useEffect(() => {}, [filteredResList]);

  // useEffect(() => {
  //   const handleScrollDebounced = debounceFunc(handleScroll, 300);
  //   window.addEventListener("scroll", handleScrollDebounced);

  //   // Cleanup function to remove the old event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollDebounced);
  //   };
  // }, [handleScroll]);

  const fetchData = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.853532&lng=77.663033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setResList(JSON.parse(JSON.stringify(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants))
      );
      setFilteredResList(JSON.parse(JSON.stringify(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)));
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  //console.log("Body render",new Date()) // The Body will render before useEffect

  //Conditional Rendering - Rendering based on condition
  // if(resList.length===0){
  //     return <ShimmerCard />
  // }

  const filterTopRes = () => {
    const newResList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredResList(newResList);
  };

  if (!onlineStatus) {
    return <div>Its the network issue</div>;
  }

  console.log("restaurant", filteredResList,resList)
  return resList.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bg-slate-100">
      <div className="flex m-4">
        <div className="search-container">
          <input
            type="text"
            className="border border-solid border-slate-600 px-4 py-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer px-4 py-2"
            onClick={() => {
              const filteredList = resList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button className="mx-4 text-slate-50 bg-slate-400 hover:text-slate-50 hover:bg-red-700 cursor-pointer px-4 py-2" onClick={filterTopRes}>
            Top Rated Restaurant
          </button>
        </div>
        <div>
          <input  className="bg-red-700 text-slate-50 hover:bg-slate-50 hover:text-red-700 cursor-pointer px-4 py-2" type="text" value={loggedInUser} onChange={(e)=>setLoggedUser(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.veg?<RestaurantDetailsHOC   
              restaurantObj={restaurant}/>:   <RestaurantDetails
              restaurantObj={restaurant}
            />}
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
