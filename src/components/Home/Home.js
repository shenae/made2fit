import React, { Component } from 'react';
import './Home.css';
import Accessories from "../../Assets/HomePage/DESKTOP/ACCESSORIES.png";
import Outerwear from "../../Assets/HomePage/DESKTOP/OUTERWEAR.png";
import Pants from "../../Assets/HomePage/DESKTOP/PANTS.png";
import Sale from "../../Assets/HomePage/DESKTOP/SALE.png";
import Shoes from "../../Assets/HomePage/DESKTOP/SHOES.png";
import Tops from "../../Assets/HomePage/DESKTOP/TOPS.png";

class Home extends Component {
    render() {
        return (
            <div className="Homepage">

            <img className="header-image"></img>

            <div className="column-image">
            <img src={Sale}></img>
            <img src={Tops}></img>
            <img src={Shoes}></img>
            <img src={Pants}></img>
            <img src={Outerwear}></img>
            <img src={Accessories}></img>
            </div>


            </div>
        );
    }
}

export default Home;