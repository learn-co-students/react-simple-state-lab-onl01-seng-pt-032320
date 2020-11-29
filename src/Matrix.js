import React, { Component } from 'react';
// import { pattern1 } from './data';
import { Cell } from './Cell';

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
//   <Matrix />
//   ✓ uses a default 'values' prop of an array with 10 items
//   ✓ each sub-array of the default 'values' prop is an array
//   ✓ each sub-array of the default values prop is filled with 10 hex color string equal to: '#F00'

// <Cell />
//   ✓ is a correctly defined and exported React component which renders a <div> with a className of 'cell'
//   ✓ has a state key of 'color'
//   ✓ state.color is initially set to the 'value' prop passed from Matrix
//   ✓ has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
//   ✓ has an event listener that, when clicked, calls this.setState() once (make sure you aren't setting state directly, but instead using the component's 'setState' method)
//   ✓ has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
//   ✓ sets the <div>'s inline style attribute to 'style={{backgroundColor: this.state.color}}'
