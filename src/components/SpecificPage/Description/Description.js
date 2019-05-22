import React, { Component } from 'react';
import Star from '../../../Assets/Icons/STAR_YELLOW.png';
import './Description.css';
import reviewStars from '../../../Assets/Icons/REVIEW_STARS.png';
import Information from '../../../Assets/Icons/INFORMATION.png';
import Slidey from '../../../Assets/Icons/SLIDEY.png';

class Description extends Component {
    render() {
        return (
            <div className='description-class'>
                <div className='desc-color-div'>
                    <h2>STRETCH CHINOS <span className='star-div'><img className='yellow-star' src={ Star } alt='yellow star'/></span></h2>
                    <h2>NOW $45.00  <span className='original-div'><h3>ORIGINAL $70.00</h3></span></h2>
                    <img className='review-stars' src={reviewStars} alt='review stars' />
                    <a href='#' className='review-link'>READ REVIEWS (35)</a>
                    <h4 className='color-picker'>COLOR: SKY BLUE</h4>
                    <div className='color-container'>
                        <div className='color1'></div>
                        <div className='color2'></div>
                        <div className='color3'></div>
                        <div className='color4'></div>
                    </div>
                </div>
                <div className='size-container'>
                    <h4 className='size-desc'>SIZE:</h4>
                    <h4 className='size-desc' className='recommended-size'>Your Recommended Size: 30 X 32 </h4>
                    <img className='info-button' src={Information} alt='information'/>
                    <div className="dropdown">
                        <button  className="drop-button">WAIST: 30</button>
                        <button  className="drop-button length">Length: 32</button>
                    </div>
                    <h4 className='size-desc'>Fit based on (35) reviews :</h4>
                    <div className='runs-container'>
                        <h5 className='runs-desc'>Runs Small</h5>
                        <img className='slidey' src={Slidey} alt='slidey' />
                        <h5 className='runs-desc runs-right'>Runs Large</h5>
                        <h5 className='runs-true'>True To Size</h5>
                    </div>
                </div>
                <div className='quantity-container'>
                    <h4>QUANTITY:</h4>
                    <button  className="quantity-button">1</button>
                </div>
                <div>
                    <button  className="bag-button">ADD TO BAG</button>
                    <h4 className='shipping-desc'>Free Shipping & Returns in the US.</h4>
                </div>
                <div className='pickup-container'>
                    <div className='input-container'>
                        <h3 className='pickup'>PICKUP IN STORE</h3>
                        <input className='zipcode' type='text' placeholder='ENTER ZIP CODE'></input>
                        <h5 className='pickup-order'>Pickup orders processed next business day.</h5>
                    </div>
                </div>
                <div className='product-detail-container'>
                    <h4 className='product-detail'>PRODUCT DETAILS</h4>
                    <p className='product-desc'>
                        Fits true to size - order your recommended size.<b />
                        <br />Stretch enhanced fit.<br />
                        98% Cotton, 2% Lycra<br />
                        Machine wash cold.<br />
                        <br />
                        Pocket openings reinforced with extra fabric.<br />
                        Signature curved waistband.<br />
                        Italian slide snap at center front closure.</p>
                </div>
                
            </div>
        )
    }
}

export default Description;