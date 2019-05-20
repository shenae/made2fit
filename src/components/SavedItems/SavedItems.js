import React, { Component } from 'react';
import './SavedItems.css';
import { Link } from 'react-router-dom';
import image1 from '../../Assets/SavedItemsPage/bluechinos2.jpg';
import image2 from '../../Assets/SavedItemsPage/bluechinos6.jpg';
import image3 from '../../Assets/SavedItemsPage/bluechinos5.jpg';
import image4 from '../../Assets/SavedItemsPage/Outerwear_Casual-Outerwear_23658-BND25_3_category.jpg';
import image5 from '../../Assets/SavedItemsPage/Sweater_Cotton_Cashmere.jpg';
import image6 from '../../Assets/SavedItemsPage/bluechinos3.jpg';
import image7 from '../../Assets/SavedItemsPage/bluechinos.jpg';
import image8 from '../../Assets/SavedItemsPage/Blazers_Cotton-Blazer_22858-BMC57_1.jpg';
import SpecificPage from '../SpecificPage/SpecificPage';

class SavedItems extends Component {
    render() {
        return (
            <div>
                <div className="saved-grid">
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image1} alt="blue chinos" />
                        </Link><p id="saved-item">WASHED CHINOS</p> <div id="saved-price">$65</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image2} alt="navy blue chinos" />
                        </Link><p id="saved-item">STRETCH CHINOS $45</p>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image3} alt="blue chinos" />
                        </Link><p id="saved-item">COTTON CHINOS $80</p>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image4} alt="jacket" />
                        </Link><p id="saved-item">DENIM JACKET $50</p>
                    </div>
                </div>
                
                <div className="saved-grid">
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image5} alt="red cashmere sweater" />
                        </Link><p id="saved-item">FRONT ZIP SWEATER $88</p>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image6} alt="blue chinos" />
                        </Link><p id="saved-item">WASHED CHINOS $65</p>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image7} alt="blue chinos" />
                        </Link><p id="saved-item">COTTON CHINOS $80</p>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img id="img-saved" src={image8} alt="navy blue blazer" />
                        </Link><p id="saved-item">LINEN BLAZER $150</p>
                    </div>
                </div>
            </div>
                
        );
    }
}


export default SavedItems;