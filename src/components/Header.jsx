import { useEffect } from "react";
import {NavLink} from 'react-router'
import './Header.css'
import LogoWhite from '../assets/images/logo-white.png'
import MobileLogo from '../assets/images/mobile-logo.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import CartIcon from '../assets/images/icons/cart-icon.png'



const Header = () => {
    useEffect(() => {
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = "/images/favicon/home-favicon.png";
    }
  }, []);
  return (
    <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src={LogoWhite} />
            <img className="mobile-logo"
              src={MobileLogo} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink
          to="/orders"
          // NavLink checks if the URL matches the to assignment
          className={({ isActive }) =>
          `orders-link header-link ${isActive && "active"}`
          }
          >
          <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={CartIcon}/>
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
  )
}

export default Header