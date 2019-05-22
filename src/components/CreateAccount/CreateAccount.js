
import React, { Component } from 'react';
import './CreateAccount.css';
import {Link} from 'react-router-dom';
class CreateAccount extends Component {
  render() {
    return (
      <div>
        <div class='desk-1' id='desk_id'>
          <div class='oval border'></div>
          <div class='oval'></div>
          <div class='oval'></div>
        </div>
        <div class='Rectangle' id='Cont'>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <div style={{display:'block'}}>
              <h1 class='Sign-Up'>Sign-Up</h1>
            </div>
            <h1 class='Sign-In'>Sign-In</h1>
          </div>
          <h1>Create Account</h1>
          <div class='container'>
            <div style={{display:'flex'}}>
              <input class='input' placeholder='First'/>
              <input class='input' class='input'placeholder='Last'/>
            </div>
            <input class='inputBigger' placeholder='Email'/>
            <input class='inputBigger' placeholder='Password'/>
            <input class='inputBigger' placeholder='Confirm Password'/>
          </div>
          <Link to='/Measurement'><button class='nextButton'><span class='nextText'>NEXT</span></button></Link>
        </div>
      </div>
    );
  }
}

export default CreateAccount;