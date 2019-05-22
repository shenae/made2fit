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
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image1} alt="blue chinos" />
                        </Link><p className="saved-item">WASHED CHINOS<p className="saved-price">$65</p></p><div className="saved-description">Breezy</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image2} alt="navy blue chinos" />
                        </Link><p className="saved-item">STRETCH CHINOS<p className="saved-price">$45</p></p><div className="saved-description">Sky Blue</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image3} alt="blue chinos" />
                        </Link><p className="saved-item">COTTON CHINOS<p className="saved-price">$50</p></p><div className="saved-description">Ink Blue</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image4} alt="jacket" />
                        </Link><p className="saved-item">DENIM JACKET<p className="saved-price">$80</p></p><div className="saved-description">Navy</div>
                    </div>
                </div>
                
                <div className="saved-grid">
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image5} alt="red cashmere sweater" />
                        </Link><p className="saved-item">FRONT ZIP SWEATER<p className="saved-price">$88</p></p><div className="saved-description">Dark Blue</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image6} alt="blue chinos" />
                        </Link><p className="saved-item">WASHED CHINOS<p className="saved-price">$65</p></p><div className="saved-description">Navy</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image7} alt="blue chinos" />
                        </Link><p className="saved-item">COTTON CHINOS<p className="saved-price">$80</p></p><div className="saved-description">Dark Blue</div>
                    </div>
                    <div>
                        <Link to="/Specific" component= { SpecificPage}><img className="img-saved" src={image8} alt="navy blue blazer" />
                        </Link><p className="saved-item">LINEN BLAZER<p className="saved-price">$150</p></p><div className="saved-description">Navy</div>
                    </div>
                </div>
            </div>
                
        );
    }
}


export default SavedItems;