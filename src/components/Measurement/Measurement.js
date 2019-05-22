
import React, { Component } from 'react';
import presentWeb from '../../Assets/MeasurementPage/pantsWeb.png';
import calculator from '../../Assets/MeasurementPage/calculator.png'
import './Measurement.css';
import {Link} from 'react-router-dom'
class Measurement extends Component {
  render() {
    return (
      <div>
         <div className='desk-1' id='desk_id_measurement'>
          <div className='oval border'></div>
          <div className='oval border'></div>
          <div className='oval'></div>
        </div>
        <h1>Let us know the size of your favorite item!</h1>
        <p className='marginBottom'>
          Based on those measurements we will recommend the best fit for you 
          using our intellectual technology.
        </p>
        <div className='Rectangle'>
          <section className='flex evenly'>
            <h1 className='padding'>SHIRTS</h1>
            <h1 className='bottom padding'>PANTS</h1>
            <h1 className='padding'>OUTERWEAR</h1>
            <h1 className='padding'>SHOES</h1> 
          </section>
          <div className='flex evenly'>
            <section>
              <img src ={presentWeb}/>
              <h6>Hover over the image for more information.</h6>
            </section> 
            <div>
                <div className='brand'>
                  <span></span>
                  <h1 className='brandText'>BRAND</h1> 
                  <i className="fas fa-chevron-down h1Down"></i>
                </div>
                <div style={{margin:'5vh', paddingBottom:'2vh'}}>
                  <div className='fontOf flex lineHeight'>WAIST<input defaultValue='32' className='spanW'/>IN</div>
                  <div className='fontOf flex lineHeight'>INSEAM <input defaultValue='29.75' className='spanW'/> IN</div>
                  <div className='fontOf flex lineHeight'>WEIGHT <input defaultValue='170' className='spanW'/> LBS</div>
                  <div className='fontOf flex lineHeight'>HEIGHT <input defaultValue='5' className='spanS'/> FT <input defaultValue='10' className='spanS'/> IN</div>
                </div>
                <hr style={{marginBottom:'8vh'}}/>
              <h3 className='prefer'>I PREFER MY PANTS TO BE</h3>
              <div className='flex'>
                <h1 className='fontOf margin'>PANT FIT</h1>
                <div className='fontOf width flex'><span></span><span className='marginOfSizez'>SLIM</span> <i className="fas fa-chevron-down marginOfSizez"></i></div>
              </div> 
              <div className='flex'>
              <h1 className='fontOf margin'>LENGTH </h1>
              <div className='fontOf width flex'><span></span><span className='marginOfSizez'>ANKLE</span> <i className="fas fa-chevron-down marginOfSizez"></i></div>
            </div> 
            </div>   
          </div>
          <div style={{height:'1px', backgroundColor:'grey', width:'60vw',margin:'5vh auto'}}></div>
          <section>
            <div style={{display:'flex', justifyContent:'start'}}>
              <img className='imageOfMeasurement' src={calculator}/>
              <h1 className = 'start bold'>Your recommended size is:</h1>
            </div>
            <div className='flex evenly'>
              <h1 className='bold'>Alpha M:</h1>
              <h1 className='bold'>Numeric: 32x30</h1>
              <h1 className='bold'>Inseam: 30</h1>
            </div>
          </section>  
          <Link to='/AccountConfirmation'><button class='button'><span class='SAVE-SUBMIT'>SAVE & SUBMIT</span></button></Link>
        </div>
      </div>
    );
  }
}

export default Measurement;