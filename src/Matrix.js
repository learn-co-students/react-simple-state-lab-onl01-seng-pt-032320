import React, { Component } from 'react';
import Cell from './Cell.js'
export default class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals)
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  //Okay so the return statement is mapping 
  //over vals and for each one it is returning a component
  //with each value passed down as a prop
  //because vals is an array, you can map 
  //over it and create an array of Cells
  
  genMatrix = () => {
    // console.log(this.props.values)
    // So it's showing you what the matrix looks like
    //	I think they want to show you how columns and rows work
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
  values: [
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
]
}
// But inside that div, we invoke this.genMatrix(). 
// We see that genMatrix is an instance method which maps this.props.values 
// to an array of JSX. Basically, every 'row' in this.props.values 
// will create a <div className="row">. Furthermore, if we look at genRow,
//  we'll see that every row will map through its vals to create an array 
//  of <div className="cell"> JSX.