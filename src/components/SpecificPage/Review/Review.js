import React, { Component } from 'react';
import './Review.css';
import reviewStars from '../../../Assets/Icons/REVIEW_STARS.png';
import Fitcentered from '../../../Assets/Icons/FIT_CENTERED.png';
import Fitright from '../../../Assets/Icons/FIT_RIGHT.png';
import Checkmark from '../../../Assets/Icons/CHECKMARK.png';

class Review extends Component {
    render() {
        return (
            <div className='review'>
                <div className='reviews-title-link'>
                    <h3 className='reviews-title'>REVIEWS (35)</h3>
                    <img className='review-stars' src={reviewStars} alt='review stars' />
                    <a href='#' className='reviews-link'>WRITE A REVIEW</a>
                </div>
                <div className='ratings'>
                    <h4>AVERAGE CUSTOMER RATINGS</h4>
                    <div className='fit-container'>
                        <h4>WAIST</h4>
                        <img className='fit-centered' src={Fitcentered} alt='Fit correctly'/>
                        <h5>Too Small</h5>
                        <h5 className='big-fit'>Too Big</h5>
                    </div>
                    <div className='fit-container'>
                        <h4>LENGTH</h4>
                        <img className='fit-centered' src={Fitright} alt='Fit wrong'/>
                        <h5>Too Small</h5>
                        <h5 className='big-fit'>Too Big</h5>
                    </div>
                    <div className='fit-container'>
                        <h4>QUALITY</h4>
                        <img className='fit-centered' src={Fitright} alt='Fit wrong'/>
                        <h5>Too Small</h5>
                        <h5 className='big-fit'>Too Big</h5>
                    </div>
                </div>
                
                <div className='review-desc'>
                    <h4 className='review-title'>REVIEWS (1-3 of 35)</h4>
                    <h4 className='next-title'>NEXT (3-6) of 35 reviews</h4>
                    <h5>Andrew - 1 weeks ago</h5>
                    <h5>(5’8", 160 lbs)</h5>
                    <h5>Size purchased: 32 x 27</h5>
                    <br />
                    <p>
                    Wow, from the moment I recieved these pants I’ve been wearing them once a week. I love the material and fit. I trusted Made2Fit’s recommendations and I have no regrets.
                    </p>
                    <br />
                    <img src={Checkmark} alt='checkmark' className='checkmark' />
                    <h5 className='recommended-review'><span>YES,</span> I recommend this product</h5>
                    <br />
                    <img src={Checkmark} alt='checkmark' className='checkmark' />
                    <h5 className='recommended-review'><span>YES,</span> recommended size was accurate</h5>
                </div>
                <div className='review-desc'>
                    <h5>Matt - 3 weeks ago</h5>
                    <h5>(5’10", 168 lbs)</h5>
                    <h5>Size purchased: 30 x 29</h5>
                    <br />
                    <p>
                    No kidding….damn these pants makes me look great. Wish other brands knew me this well. Just take all my money already!
                    </p>
                    <br />
                    <img src={Checkmark} alt='checkmark' className='checkmark' />
                    <h5 className='recommended-review'><span>YES,</span> I recommend this product</h5>
                    <br />
                    <img src={Checkmark} alt='checkmark' className='checkmark' />
                    <h5 className='recommended-review'><span>YES,</span> recommended size was accurate</h5>
                </div>
                <div className='review-desc'>
                    <h5>Danny - 1 month ago</h5>
                    <h5>(6’0", 177 lbs)</h5>
                    <h5>Size purchased: 32 x 30</h5>
                    <br />
                    <p>
                    Less time shopping, more time making bank. Thanks for keeping me stylish.
                    </p>
                    <br />
                    <img src={Checkmark} alt='checkmark' className='checkmark' />
                    <h5 className='recommended-review'><span>YES,</span> I recommend this product</h5>
                    <br />
                    <img src={Checkmark} alt='checkmark' className='checkmark' />
                    <h5 className='recommended-review'><span>YES,</span> recommended size was accurate</h5>
                </div>
            </div>
        )
    }
}

export default Review;