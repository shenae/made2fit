import React, { Component } from 'react';
import './Review.css';

class Review extends Component {
    render() {
        return (
            <div>
                <h3>REVIEWS (35)</h3> <span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span><span>&#x2605;</span>
                <a href=''>WRITE A REVIEW</a>
                <h4>AVERAGE CUSTOMER RATINGS</h4>
                <h4>REVIEWS (1-3 of 35)</h4>
                <h4>NEXT (3-6) of 35 reviews
                <div>
                    <h5>Andrew - 1 weeks ago</h5>
                    <h5>(5’8, 160 lbs)</h5>
                    <h5>Size purchased: 32 x 27</h5>
                    <p>
                    Wow, from the moment I recieved these pants I’ve been wearing them once a week. I love the material and fit. I trusted Made2Fit’s recommendations and I have no regrets.
                    </p>

                </div>
                </h4>
            </div>
        )
    }
}

export default Review;