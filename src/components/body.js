import React , { Component } from 'react'
import './body.css'
import Contender from '../components/contender';
import Head from '../components/head';
class body extends Component{
  render(){
    return(
      <div className="body">
        <Head />
        <Contender />
      </div>
    );
  }
}

export default body;