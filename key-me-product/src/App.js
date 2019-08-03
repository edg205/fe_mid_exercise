import React, { Component } from 'react';
import plainKey from './plainKey.png';
import dotsKey from './dotsKey.png';
import bottleOpenerKey from './bottleOpenerKey.png';

import './App.css';

class AddKeyPage extends Component {
  constructor(){
    super()
    this.state = {
      plainKeyCount: 0,
      bottleOpenerKeyCount: 0,
      dotsKeyCount: 0
    }
  }
  
  incrementKeyCount (keyType){
    this.setState( prevState => ({
      [keyType]:  prevState[keyType] + 1
    }))
  }
  
  decrementKeyCount (keyType){
    this.setState( prevState => ({
      [keyType]:  prevState[keyType] ? prevState[keyType] - 1 : 0
    }))
  }
  
  render () {
    return (
      <div className="container" id="key-div">
        <div className="row">
          <div className="col-sm">
            <img src={plainKey} className="images" alt="logo" />
            <div className="circle">
            </div>
            <p className="key-type"> Brass </p>
            <p className="key-price"> $3.99 </p>
            <div className="quantity-div">
              <button onClick={()=> {this.decrementKeyCount('plainKeyCount')}} type="button" className="btn btn-outline-danger btn-sm" id="quantity-button">
                -
              </button>
                <p id="quantity-num"> 
                  {this.state.plainKeyCount} 
                </p>
              <button onClick={()=> {this.incrementKeyCount('plainKeyCount')}} type="button" className="btn btn-outline-danger btn-sm" id="quantity-button">
                +
              </button>
            </div>
          </div>
          
          <div className="col-sm">
            <img src={bottleOpenerKey} className="images" alt="logo" />
            <div className="circle">
            </div>
            <p className="key-type"> Bottle Opener </p>
            <p className="key-price"> $5.99 </p>
            <div className="quantity-div">
              <button onClick={()=> {this.decrementKeyCount('bottleOpenerKeyCount')}} type="button" className="btn btn-outline-danger btn-sm" id="quantity-button">
                -
              </button>
                <p id="quantity-num"> 
                  {this.state.bottleOpenerKeyCount} 
                </p>
              <button onClick={()=> {this.incrementKeyCount('bottleOpenerKeyCount')}} type="button" className="btn btn-outline-danger btn-sm" id="quantity-button">
                +
              </button>
            </div>
          </div>
          
          <div className="col-sm">
            <img src={dotsKey} className="images" alt="logo" />
            <div className="circle">
            </div>
            <p className="key-type"> Dots </p>
            <p className="key-price"> $4.99 </p>
            <div className="quantity-div">
              <button onClick={()=> {this.decrementKeyCount('dotsKeyCount')}} type="button" className="btn btn-outline-danger btn-sm" id="quantity-button">
                -
              </button>
                <p id="quantity-num"> 
                  {this.state.dotsKeyCount} 
                </p>
              <button onClick={()=> {this.incrementKeyCount('dotsKeyCount')}} type="button" className="btn btn-outline-danger btn-sm" id="quantity-button">
                +
              </button>
            </div>
          </div>
        </div>
          
        <div className="container" id="checkout-div">
          <div className="row">
            <button type="button" className="btn btn-secondary btn-lg disabled" role="button" 
              id={
                this.state.plainKeyCount !== 0 || 
                this.state.bottleOpenerKeyCount !==0 || 
                this.state.dotsKeyCount !== 0 
                ? "checkout-button-enabled" : "checkout-button-disabled" } 
              >
              Proceed to Checkout
            </button>
          </div>
        </div>
        
      </div>
      
    )
  }
}

export default AddKeyPage;
