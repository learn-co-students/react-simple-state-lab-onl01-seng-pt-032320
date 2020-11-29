import React, { Component} from 'react';

export default class Cell extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = { color: props .value }
    } 

    onMouseClick = (event) => {
      this.setState({color: `#333`})
    }
       
    render() {
      return  <div onClick={this.onMouseClick} className="cell" style={{backgroundColor: this.state.color}}></div>
      
  }
}

    

    

   

