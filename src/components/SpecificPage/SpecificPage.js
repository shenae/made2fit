import React, { Component } from 'react';
import Images from './Images/Images';
import Description from './Description/Description';
import Review from './Review/Review';
import Similar from './Similar/Similar';
import ClothesOption from '../ClothesOption';
import './SpecificPage.css';


class SpecificPage extends Component {
    render () {
        return (
            <div className='specific-page'>
                {/* <div className='image-desc-div'>
                    <Images />
                    <Description />
                </div> */}
                <Images />
                <Description />
                <Review /> 
                {/* <div className='clothes-options'> */}
                   {/* <Images />
                    <Description />
                    <Review /> 
                </div> */}
                {/* <ClothesOption /> */}
                
                <Similar />
            </div>
        )
    }
}

export default SpecificPage;