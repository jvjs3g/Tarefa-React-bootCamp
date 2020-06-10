import React , { Component } from 'react';
import Contender from './contender';
import './body.css';

class body extends Component{
  render(){
    return(
     <div className="styleBody">
       <Contender />
     </div>
    );
  }
}
export default body;