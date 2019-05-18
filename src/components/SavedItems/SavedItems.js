import React, { Component } from 'react';
import image1 from '../../Assets/SavedItemsPage/bluechinos2.jpg';
import image2 from '../../Assets/SavedItemsPage/bluechinos6.jpg';
import image3 from '../../Assets/SavedItemsPage/bluechinos5.jpg';
import image4 from '../../Assets/SavedItemsPage/Outerwear_Casual-Outerwear_23658-BND25_3_category.jpg';
import image5 from '../../Assets/SavedItemsPage/Sweater_Cotton_Cashmere.jpg';
import image6 from '../../Assets/SavedItemsPage/bluechinos3.jpg';
import image7 from '../../Assets/SavedItemsPage/bluechinos.jpg';
import image8 from '../../Assets/SavedItemsPage/Blazers_Cotton-Blazer_22858-BMC57_1.jpg';

class SavedItems extends Component {
    render() {
        return (
         //header
            <div>
            <img src={image1} alt="blue chinos" />
            <img src={image2} alt="blue chinos" />
            <img src={image3} alt="blue chinos" />
            <img src={image4} alt="blue chinos" />
            <img src={image5} alt="blue chinos" />
            <img src={image6} alt="blue chinos" />
            <img src={image7} alt="blue chinos" />
            <img src={image8} alt="blue chinos" />



            </div>
        );
    }
}


export default SavedItems;