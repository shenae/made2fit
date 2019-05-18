import React, { Component } from 'react';
import './Review.css';

class Review extends Component {
    render() {
        return (
            <div className='review'>
                <div className='reviews-title-link'>
                    <h3 className='reviews-title'>REVIEWS (35) <span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span></h3>
                    <a href='#' className='reviews-link'>WRITE A REVIEW</a>
                </div>
                <div className='ratings'>
                    <h4>AVERAGE CUSTOMER RATINGS</h4>
                    <h4>REVIEWS (1-3 of 35)</h4>
                    <h4>NEXT (3-6) of 35 reviews</h4>
                </div>
                
                <div>
                    <h5>Andrew - 1 weeks ago</h5>
                    <h5>(5’8", 160 lbs)</h5>
                    <h5>Size purchased: 32 x 27</h5>
                    <p>
                    Wow, from the moment I recieved these pants I’ve been wearing them once a week. I love the material and fit. I trusted Made2Fit’s recommendations and I have no regrets.
                    </p>

                    <span>&#x2713;</span><h5><span>YES,</span> I recommend this product</h5>
                    <span>&#x2713;</span><h5><span>YES,</span> recommended size was accurate</h5>
                </div>
                <div>
                    <h5>Matt - 3 weeks ago</h5>
                    <h5>(5’10", 168 lbs)</h5>
                    <h5>Size purchased: 30 x 29</h5>
                    <p>
                    No kidding….damn these pants makes me look great. Wish other brands knew me this well. Just take all my money already!
                    </p>

                    <span>&#x2713;</span><h5><span>YES,</span> I recommend this product</h5>
                    <span>&#x2713;</span><h5><span>YES,</span> recommended size was accurate</h5>
                </div>
                <div>
                    <h5>Danny - 1 month ago</h5>
                    <h5>(6’0", 177 lbs)</h5>
                    <h5>Size purchased: 32 x 30</h5>
                    <p>
                    Less time shopping, more time making bank. Thanks for keeping me stylish.
                    </p>

                    <span>&#x2713;</span><h5><span>YES,</span> I recommend this product</h5>
                    <span>&#x2713;</span><h5><span>YES,</span> recommended size was accurate</h5>
                </div>
            </div>
        )
    }
}

export default Review;