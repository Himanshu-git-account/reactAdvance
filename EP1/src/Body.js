import { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";

import { restaurantList } from "./utils/mockData";
import ShimmerCard from "./utils/Shimmer/ShimmerCard";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("useEffect Rendered");
    fetchData();
  }, []);

  useEffect(()=>{

    console.log("useEffectr inside filtered res list")
  },[filteredResList])

 

  const handleScroll = () =>{
    if(window.innerHeight+document.documentElement.scrollTop === document.documentElement.offsetHeight){
        console.log("reachedLasat");
        fetchAdditionaldata();
    }
  }

  window.addEventListener("scroll",handleScroll);

  const fetchAdditionaldata = () =>{
    //for ingfinite scroll
  }

  console.log("Body rendered");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.853532&lng=77.663033&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setResList(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch (err) {
      console.log(err);
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
              console.log(resList);
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
          <RestaurantDetails
            key={restaurant.info.id}
            restaurantObj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
