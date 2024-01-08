import { useState } from "react";
import RestaurantDetails from "./RestaurantDetails";

import {restaurantList} from './utils/mockData';

export const Body = () => {
    const [resList,setResList] = useState(restaurantList)
    const filterTopRes = () =>{
       const newResList = restaurantList.filter((res)=>res.data.avgRating>4);
       console.log(newResList)
       setResList(newResList);
    }
    return (
        <div className='bodyContainer'>
            <div className="filter">
                <button className="filter-btn" onClick={filterTopRes}>Top Rated Restaurant</button>
            </div>
            <div className='resContainer'>
                {resList.map((restaurant) => <RestaurantDetails key={restaurant.data.id} restaurantObj={restaurant} />)}
            </div>
        </div>
    )
}

export default Body