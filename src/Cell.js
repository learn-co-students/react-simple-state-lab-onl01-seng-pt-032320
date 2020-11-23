import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {color: props.value}
        //state.color is initially set to the 'value' prop passed from Matrix
    }

    render() {
        return (
            <div className='cell' 
            style={{backgroundColor: this.state.color}}
            //onclick listener
            onClick={this.afterClick}>
            </div>
        )
    }

    //after onclick- updates the state to the following hex value: '#333'
    afterClick = (event) => {
        this.setState({color: '#333'})
    }
}