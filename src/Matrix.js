import React, { Component } from 'react';
import { pattern1 } from './data';
// import {Cell} from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    console.log("hi")
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values:
   (() => { 
     return ( new Array(10).fill(['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']))
  }) ()
  // IIFE imediately invoke function expression itself
  }
