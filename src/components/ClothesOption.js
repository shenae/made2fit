import React, { Component } from 'react';
import Images from './SpecificPage/Images/Images';
import Description from './SpecificPage/Description/Description';
import Review from './SpecificPage/Review/Review';

class ClothesOption extends Component {
    render() {
        return(
            <div className='clothes-option'>
                <Images />
                <Description />
                <Review />
            </div>
        )
    }
}

export default ClothesOption;