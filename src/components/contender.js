import React, { Component } from 'react';
import './contender.css'
import Message from './message';
import file from '../img/profile.jpg';
class contender extends Component{
  render(){
    return(
      <>
      <div className="styleContender">
        <img className="foto" src={file}/>
        <div className="linha"></div>
        <Message/>
      </div>

      <div className="styleContender">
      <img className="foto"  src={file}/>
      <div className="linha"></div>
        <Message/>
      </div>
      </>
    );
  }
}
export default contender;