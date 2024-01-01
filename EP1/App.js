import React from 'react'
import ReactDOM from 'react-dom/client';
import { restaurantList } from './restaurantData'

const Header = () => {
    return (<div className='headerContainer'>
        <img
            width={"100px"}
            height={"100px"}
            src="https://img.freepik.com/premium-vector/food-delivery-logo-template-design-creative-vector-emblem-icon-design-concept_306040-854.jpg"></img>
        <div className='navContainer'>
            <ul className='navItems'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

const Body = () => {
    return (
        <div className='bodyContainer'>
            <SearchBar />
            <div className='resContainer'>
                {restaurantList.map((restaurant) => <RestaurantDetails key={restaurant.data.id} restaurantObj={restaurant} />)}
            </div>
        </div>
    )
}

const RestaurantDetails = (props) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = props?.restaurantObj?.data;
    return (
        <div className='resDetailsCard'>
            <img className="imgContainer" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
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

const SearchBar = () => {
    return (
        <div className='searchcontainer'>
            <input type='text'></input>
            <button type='text'>Search</button>
        </div>
    )
}

const Footer = () => {
    return <div className='footerContainer'>
        Copyright @2023
    </div>
}

const AppLayout = () => {
    return (
        <div className="appContainer">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)