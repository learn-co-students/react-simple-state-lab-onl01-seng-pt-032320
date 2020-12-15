import React, { Component } from 'react';
export default class Cell extends Component {
    constructor(props) {
        super()
//Remember to call super() on the first line 
//of the constructor (this is required in React 
//components if we are to use this.state in the constructor). 
        this.state = {
 // ...define initial state with a key
 // of 'color' set to the 'value' prop
          color: props.value
        }
      }
//we were passing value down from the
// value component
//value comes in as a prop, so we need
// to use props.value to access value 
//

  
    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }
  
    render() {
        return (
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}></div>
        )
    }
  
}

// replace the return value in genRow's map
//  to: <Cell value={val} />. Here we are 
//  specifying our Cell component should have a value prop.