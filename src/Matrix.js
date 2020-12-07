import React, { Component } from 'react';
import { allRed } from './data.js'
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    //<div className="cell"></div>
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
  values: allRed
}
