import React, { Component } from 'react';
import './contender.css'
import Message from './message';
class contender extends Component{
  render(){
    return(
      <>
      <div className="styleContender">
        <Message/>
      </div>

      <div className="styleContender">
        <Message/>
      </div>
      </>
    );
  }
}
export default contender;