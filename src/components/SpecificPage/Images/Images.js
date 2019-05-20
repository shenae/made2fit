import React, { Component } from 'react';
import './Images.css';
import image1 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto1.png';
import image2 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto2.jpg';
import image3 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto3.jpg';
import image4 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto4.jpg';
import image5 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto5.jpg';
import image6 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto6.jpg';
import image7 from '../../../Assets/StretchedChinoPantsProductPage/MainCarouselPhoto7.png';

class Images extends Component {
    constructor() {
        super();
        this.state = {
            currentPhoto: image1
        }
    }

    changePhoto = (event) => {
        let photo = event.target.src;
        this.setState({
            currentPhoto: photo
        })
    }

    render () {
        return (
            <div className='carousel'>
                <div className='carousel-img-side'>
                    <img src={image1} alt='carousel1' onClick={this.changePhoto} className='carousel-img'/>
                    <img src={image2} alt='carousel2' onClick={this.changePhoto} className='carousel-img'/>
                    <img src={image3} alt='carousel3' onClick={this.changePhoto} className='carousel-img'/>
                    <img src={image4} alt='carousel4' onClick={this.changePhoto} className='carousel-img'/>
                    <img src={image5} alt='carousel5' onClick={this.changePhoto} className='carousel-img'/>
                    <img src={image6} alt='carousel6' onClick={this.changePhoto} className='carousel-img'/>
                    <img src={image7} alt='carousel7' onClick={this.changePhoto} className='carousel-img'/>
                </div>
               
               <div className='main-container'>
                  <img src={this.state.currentPhoto} alt='mainpic' className='carousel-img-main'/> 
                  <h4>MODEL MEASUREMENTS: (Height 6’-1”) (170 lbs) wearing a size 30 x 34.  </h4>
               </div>
               
            </div>
        )
    }
}

export default Images;