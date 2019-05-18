import React, { Component } from 'react';
import Images from './Images/Images';
import Description from './Description/Description';
import Review from './Review/Review';
import Similar from './Similar/Similar';


class SpecificPage extends Component {
    render () {
        return (
            <div>
                <Images />
                <Description />
                <Review />
                <Similar />
            </div>
        )
    }
}

export default SpecificPage;