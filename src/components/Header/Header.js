import React, { Component } from 'react';
import "./Header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "../../Assets/Icons/HEADER/LOGO.png";
import NavProfile from "../../Assets/Icons/HEADER/NAV_PROFILE.png";
import NavStar from "../../Assets/Icons/HEADER/NAV_STAR.png";
import NavSearch from "../../Assets/Icons/HEADER/NAV_SEARCH.png";
import NavLocation from "../../Assets/Icons/HEADER/NAV_LOCATION.png";
import NavBag from '../../Assets/Icons/HEADER/NAV_BAG.png';
import CreateAccount from '../CreateAccount/CreateAccount';
import SavedItems from '../SavedItems/SavedItems';
import Home from '../Home/Home';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <div className="banner">SALE 30% off Accessories</div>
                    <div className="header-top">
        
                        <div className="first-logos">                                                   
                            <Link to='/CreateAccount'><img src={NavProfile} id="profile-logo"></img></Link>
                            <Link to="/Saved" component={SavedItems}><img src={NavStar} id="star-logo"></img> </Link>
                        </div>
                      {/* <Link to="/" component={Home}><img src={Logo} id="head-logo"></img></Link> */}
                    
                        <div className="second-logos">
                            <img src={NavSearch} id="search-logo"></img>
                            <img src={NavLocation} id="location-logo"></img>
                            <img src={NavBag} id="location-logo"></img>
                        </div>
                      </div>                    
                      <Link to="/" component={Home}><img src={Logo} id="head-logo"></img></Link>


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
