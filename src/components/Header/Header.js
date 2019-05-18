import React, { Component } from 'react';
import "./Header.css";
import Logo from "../../Assets/Icons/HEADER/LOGO.png";
import NavProfile from "../../Assets/Icons/HEADER/NAV_PROFILE.png";
import NavStar from "../../Assets/Icons/HEADER/NAV_STAR.png";
import NavSearch from "../../Assets/Icons/HEADER/NAV_SEARCH.png";
import NavLocation from "../../Assets/Icons/HEADER/NAV_LOCATION.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <div className="banner">SALE 30% off Accessories</div>
                    <div className="header-top">
                        <div className="first-logos">
                            <img src={NavProfile} id="profile-logo"></img>
                            <img src={NavStar} id="star-logo"></img>
                        </div>
                        <img src={Logo} id="head-logo" ></img>
                        <div className="second-logos">
                            <img src={NavSearch} id="search-logo"></img>
                            <img src={NavLocation} id="location-logo"></img>
                        </div>
                    </div>
                </header>
                <nav>
                    <ul className="header-nav">
                        <li>GET STARTED</li>
                        <li>PANTS</li>
                        <li>TOPS</li>
                        <li>OUTERWEAR</li>
                        <li>SHOES</li>
                        <li>ACCESORIES</li>
                        <li>SALE</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header