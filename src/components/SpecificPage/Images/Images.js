import React, { Component } from 'react';
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
        let photo = event.target.value;
        console.log(image1);
        this.setState({
            currentPhoto: photo
        })
    }

    render () {
        return (
            <div>
               <img src={image1} alt='carousel1' value={image1} onClick={this.changePhoto}/>
               <img src={image2} alt='carousel2' value={image2} onClick={this.changePhoto}/>
               <img src={image3} alt='carousel3' value={image3} onClick={this.changePhoto}/>
               <img src={image4} alt='carousel4' value={image4} onClick={this.changePhoto}/>
               <img src={image5} alt='carousel5' value={image5} onClick={this.changePhoto}/>
               <img src={image6} alt='carousel6' value={image6} onClick={this.changePhoto}/>
               <img src={image7} alt='carousel7' value={image7} onClick={this.changePhoto}/>
               <img src={this.state.currentPhoto} alt='mainpic'/>
            </div>
        )
    }
}

export default Images;