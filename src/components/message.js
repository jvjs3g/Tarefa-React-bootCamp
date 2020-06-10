import React , { Component } from 'react';
import './message.css';
import file from '../img/profile.jpg';

class message extends Component{
  render(){
    return(
     <div className="styleMessage">
       <img src={file}/>
       <div className="msg"></div>
     </div>
    );
  }
}
export default message;