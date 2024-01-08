import { LOGO_URL } from "./utils/constant"

const Header = () => {
    return (<div className='headerContainer'>
        <img
            width={"100px"}
            height={"100px"}
            src={LOGO_URL}></img>
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

export default Header