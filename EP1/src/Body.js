import { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";

import { restaurantList } from "./utils/mockData";
import ShimmerCard from "./utils/Shimmer/ShimmerCard";
import { debounceFunc } from "./utils/commonUtils";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Shimmer/useOnlineStatus";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(false);

  const [onlineStatus] = useOnlineStatus();

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
      setResList((prevResList) => [
        ...prevResList,
        ...jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      ]);
      setFilteredResList((prevResList) => [
        ...prevResList,
        ...jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      ]);
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
    setResList(newResList);
  };

  if(!onlineStatus){
    return <div>Its the network issue</div>
  }
  return resList.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="bodyContainer">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="filter-button"
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
        <button className="filter-btn" onClick={filterTopRes}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer">
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            <RestaurantDetails
              key={restaurant.info.id}
              restaurantObj={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
