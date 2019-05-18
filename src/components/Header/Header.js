import React, { Component } from 'react';
import "./Header.css";
import Logo from "../../Assets/Icons/HEADER/LOGO.png";
import NavProfile from "../../Assets/Icons/HEADER/NAV_PROFILE.png";
import NavStar from "../../Assets/Icons/HEADER/NAV_STAR.png";
import NavSearch from "../../Assets/Icons/HEADER/NAV_SEARCH.png";
import NavLocation from "../../Assets/Icons/HEADER/NAV_LOCATION.png";

class Header extends Component {
    render () {
        return(
            <div>
                <header>

            <div className="header-top">
                <img src={NavProfile} id="profile-logo"></img>
                <img src={NavStar} id="star-logo"></img>    
                <img src={Logo} id="head-logo" ></img>
                <img src={NavSearch} id="search-logo"></img>
                <img src={NavLocation} id="location-logo"></img>
                {/* <img src={Logo}></img>                                 */}
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