import React, { Component } from 'react';
import './Home.css';
import Accessories from "../../Assets/HomePage/DESKTOP/ACCESSORIES.png";
import Outerwear from "../../Assets/HomePage/DESKTOP/OUTERWEAR.png";
import Pants from "../../Assets/HomePage/DESKTOP/PANTS.png";
import Sale from "../../Assets/HomePage/DESKTOP/SALE.png";
import Shoes from "../../Assets/HomePage/DESKTOP/SHOES.png";
import Tops from "../../Assets/HomePage/DESKTOP/TOPS.png";
import Hero from '../../Assets/HomePage/HOME_HERO.png';
import HowItWorks from "../../Assets/HomePage/DESKTOP/HOW_IT_WORKS.png";

class Home extends Component {
    render() {
        return (
            <div className="homepage">
            
            <div className="hero">
                <h1>Never worry about <br></br>finding the right fit again.</h1>
                <button>Get Started</button>
                <button>Learn More</button>
                <img className="header-image" src={Hero} /> 
                <div className="how-it-works-title">How It Works</div>                  
            <img className="how-it-works-image" src={HowItWorks} />                      
            </div>     
            

            <div className="column-image">
            <img src={Sale}></img>
            <img src={Pants}></img>
            <img src={Tops}></img>
            <img src={Outerwear}></img>
            <img src={Shoes}></img>
            <img src={Accessories}></img>
            </div>


            </div>
        );
    }
}

export default Home;