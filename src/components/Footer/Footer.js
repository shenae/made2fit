import React, { Component } from 'react';
import "./Footer.css";
import Instagram from "../../Assets/Icons/FOOTER/Instagram.png";
import Pinterest from "../../Assets/Icons/FOOTER/pinterest.png";
import Youtube from "../../Assets/Icons/FOOTER/Youtube.png";


class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <footer>                
                <div className="footer-links">
                <p>About Us</p>
                <p>Sizing & Fit</p>
                <p>Privacy Policy</p>
                <p>Shipping and Returns</p>
                <p>Contact Us</p>
                <p>Locations</p>
                <p>Terms</p>
                <p>Help</p>                
                </div>

                <div className="social-link">
                <img src={Instagram} id="instagram"></img>
                <img src={Pinterest} id="pinterest"></img>
                <img src={Youtube} id="youtube"></img>
                </div>
            </footer>

            </div>
        );
    }
}

export default Footer;