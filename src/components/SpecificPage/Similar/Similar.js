import React, { Component } from 'react';
import './Similar.css';
import image1 from '../../../Assets/StretchedChinoPantsProductPage/YouMayAlsoLikeThisSectionPhoto1.jpg';
import image2 from '../../../Assets/StretchedChinoPantsProductPage/YouMayAlsoLikeThisSectionPhoto2.jpg';
import image3 from '../../../Assets/StretchedChinoPantsProductPage/YouMayAlsoLikeThisSectionPhoto3.jpg';
import image4 from '../../../Assets/StretchedChinoPantsProductPage/YouMayAlsoLikeThisSectionPhoto4.jpg';


class Similar extends Component {
    render() {
        return(
            <div className='similar'>
                <h3 className='similar-title'>YOU MAY ALSO LIKE THESE:</h3>
                <div className='recommended'>
                    <img src={image1} alt='similar1'/>
                </div>
                <div className='recommended'>
                    <img src={image2} alt='similar2'/>
                </div>
                <div className='recommended'>
                    <img src={image3} alt='similar3'/>
                </div>
                <div className='recommended'>
                    <img src={image4} alt='similar4'/>
                </div>

            </div>
        )
    }
}

export default Similar;