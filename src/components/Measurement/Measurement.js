
import React, { Component } from 'react';
import presentWeb from '../../Assets/MeasurementPage/pantsWeb.png';
import './Measurement.css';
import {Link} from 'react-router-dom'
class Measurement extends Component {
  render() {
    return (
      <div class='Rectangle'>
        <section class='flex evenly'>
          <h1 class='padding'>SHIRTS</h1>
          <h1 class='bottom padding'>PANTS</h1>
          <h1 class='padding'>OUTERWEAR</h1>
          <h1 class='padding'>SHOES</h1> 
        </section>
        <div class='flex evenly'>
          <section>
            <img src ={presentWeb}/>
            <h6>Hover over the image for more information.</h6>
          </section> 
          <div>
              <div class='brand'>
                <span></span>
                <h1 class='brandText'>BRAND</h1> 
                <i class="fas fa-chevron-down h1Down"></i>
              </div>
              <div style={{margin:'5vh', borderBottom:'solid grey'}}>
                <div class='fontOf flex lineHeight'>WAIST<span> 32 </span>IN</div>
                <div class='fontOf flex lineHeight'>INSEAM <span> 29.75 </span>IN</div>
                <div class='fontOf flex lineHeight'>WEIGHT <span>170</span> LBS</div>
                <div class='fontOf  lineHeight'>HEIGHT <span>5</span> FT <span>10</span> IN</div>
              </div>
            <h3 class='prefer'>I PREFER MY PANTS TO BE</h3>
            <div class='flex'>
              <h1 class='fontOf margin'>PANT FIT</h1>
              <div class='fontOf width flex'><span></span><span class='marginOfSizez'>SLIM</span> <i class="fas fa-chevron-down marginOfSizez"></i></div>
            </div> 
            <div class='flex'>
            <h1 class='fontOf margin'>LENGTH </h1>
            <div class='fontOf width flex'><span></span><span class='marginOfSizez'>ANKLE</span> <i class="fas fa-chevron-down marginOfSizez"></i></div>
          </div> 
          </div>   
        </div>
        <section>
          <h1 class = 'start bold'>Your recommended size is:</h1>
          <div class='flex evenly'>
            <h1 class='bold'>Alpha M:</h1>
            <h1 class='bold'>Numeric: 32x30</h1>
            <h1 class='bold'>Inseam: 30</h1>
          </div>
        </section>  
        <Link to='/AccountConfirmation'><button class='button'><span class='SAVE-SUBMIT'>SAVE & SUBMIT</span></button></Link>
      </div>
    );
  }
}

export default Measurement;