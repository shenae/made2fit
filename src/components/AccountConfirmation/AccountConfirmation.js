import React, { Component } from 'react';
import present from '../../Assets/MeasurementPage/present.png'
import { Redirect } from 'react-router-dom'
import './AccountConfirmation.css'
class AccountConfirmation extends Component {
  render() {
    return (
      <div >
        <section class='desk-1'>
          <div class='oval border'></div>
          <div class='oval'></div>
          <div class='oval border'></div>
        </section>
        <img class='image' src={present}/>
        <section class='container'>
          <h1 class='text size'>You have completed your profile!</h1>
          <p class='text'>
            We have saved your measurements to your profile so that you don’t 
            need to figure out your perfect fit. Our AI technology uses those 
            measurements to generate sizing recommendations for you every time 
            you view a product. All you have to do is add the product to your bag 
            and then check out.
          </p>
        </section>
        <button onClick={()=> this.props.history.push(`/`)} class='button'><span class='START-SHOPPING'>START SHOPPING</span></button>
      </div>
    );
  }
}

export default AccountConfirmation;