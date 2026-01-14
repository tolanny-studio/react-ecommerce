import React,{useEffect} from 'react'
import { Link } from 'react-router'
import './CheckoutHeader.css'

const CheckoutHeader = () => {
  useEffect(() => {
      const link = document.querySelector("link[rel='icon']");
      if (link) {
        link.href = "/images/favicon/cart-favicon.png";
      }
    }, []);
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">3 items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  )
}

export default CheckoutHeader