import React, { Component } from 'react'

class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }
    handleOnClicks = (e) => {
        debugger;
        //this.setState(color: "#333")
    }
    render() {
        return (
            <div 
            className="cell"
            onClick={this.handleOnClicks}
            
            >
                
            </div>
        )
    }
}

export default Cell