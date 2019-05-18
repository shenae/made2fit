import React, { Component } from 'react';
import Images from './Images/Images';
import Description from './Description/Description';
import Review from './Review/Review';
import Similar from './Similar/Similar';
import ClothesOption from '../ClothesOption';


class SpecificPage extends Component {
    render () {
        return (
            <div>
                {/* <div className='clothes-options'>
                   <Images />
                    <Description />
                    <Review /> 
                </div> */}
                <ClothesOption />
                
                <Similar />
            </div>
        )
    }
}

export default SpecificPage;