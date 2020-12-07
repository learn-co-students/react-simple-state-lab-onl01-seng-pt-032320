import React, { Component } from 'react'

class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }
    handleOnClicks = () => {
        this.setState({color: "#333"})
    }
    render() {
        return (
            <div 
            className="cell"
            onClick={this.handleOnClicks}
            style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}

export default Cell