import { IMG_CDN_URL } from "./utils/constant";

const RestaurantDetails = (props) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = props?.restaurantObj?.data;
    return (
        <div className='resDetailsCard'>
            <img className="imgContainer" src={IMG_CDN_URL + cloudinaryImageId}></img>
            <div className='resDetails'>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>₹{costForTwo / 100} FOR TWO</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantDetails